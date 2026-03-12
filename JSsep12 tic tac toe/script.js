let xIsNext = true;
let squares = Array(9).fill(null);

const statusDisplay = document.getElementById('status');
const squaresElements = document.querySelectorAll('.square');
const resetButton = document.getElementById('reset');

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонталі
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикалі
        [0, 4, 8], [2, 4, 6]             // Діагоналі
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function handleClick(e) {
    const index = e.target.getAttribute('data-index');

    if (squares[index] || calculateWinner(squares)) {
        return;
    }

    squares[index] = xIsNext ? 'X' : 'O';
    xIsNext = !xIsNext;
    render();
}

function render() {
    squaresElements.forEach((square, i) => {
        square.textContent = squares[i];
    });

    const winner = calculateWinner(squares);
    if (winner) {
        statusDisplay.textContent = 'Winner: ' + winner;
    } else if (!squares.includes(null)) {
        statusDisplay.textContent = 'Draw!';
    } else {
        statusDisplay.textContent = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
}

function resetGame() {
    squares = Array(9).fill(null);
    xIsNext = true;
    render();
}

squaresElements.forEach(square => {
    square.addEventListener('click', handleClick);
});

resetButton.addEventListener('click', resetGame);