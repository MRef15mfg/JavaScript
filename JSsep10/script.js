const usersList = document.getElementById('usersList');
const todosList = document.getElementById('todosList');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.textContent = user.name;

      userDiv.addEventListener('click', () => {
        loadTodos(user.id);
      });

      usersList.appendChild(userDiv);
    });
  });

function loadTodos(userId) {
  todosList.innerHTML = 'Завантаження...';

  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(response => response.json())
    .then(todos => {
      todosList.innerHTML = '';

      todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        if (todo.completed) {
          todoDiv.classList.add('completed');
        }

        todoDiv.textContent = todo.title;
        todosList.appendChild(todoDiv);
      });
    });
}
