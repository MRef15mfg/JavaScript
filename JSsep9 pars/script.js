const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', function () {

const username = document.getElementById('username').value;

if (username === '') {
    output.innerHTML = '<p class="error">Введіть логін</p>';
    return;
}

fetch(`https://api.github.com/users/${username}`)
    .then(function (response) {

        if (!response.ok) {
            throw new Error('Користувача не знайдено');
        }

        return response.json();
    })
    .then(function (data) {

        output.innerHTML = `
            <img src="${data.avatar_url}">
            <p><b>Імʼя:</b> ${data.name || 'не вказано'}</p>
            <p><b>Логін:</b> ${data.login}</p>
            <p><b>GitHub:</b> <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
            <p><b>Блог:</b> ${data.blog || 'не вказано'}</p>
            <p><b>Місцезнаходження:</b> ${data.location || 'не вказано'}</p>
            <p><b>Email:</b> ${data.email || 'не вказано'}</p>
            <p><b>Підписники:</b> ${data.followers}</p>
            <p><b>Підписки:</b> ${data.following}</p>`;
    })
    .catch(function (error) {
        output.innerHTML = `<p class="error">${error.message}</p>`;
    });

});
