const productsContainer = document.getElementById('products');

function addProduct(name) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.textContent = name;
    productsContainer.appendChild(card);
}

document.getElementById('addFish').addEventListener('click', function () {
    addProduct('Fish');
});

document.getElementById('addApple').addEventListener('click', function () {
    addProduct('Apple');
});

document.getElementById('addEggs').addEventListener('click', function () {
    addProduct('Eggs');
});
