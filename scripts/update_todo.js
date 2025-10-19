const check = () => {
    const todo = document.querySelector('textarea').value;
    document.querySelector('.error').classList.remove('green');
    todo.length < 5 || todo.length > 100 ? document.querySelector('.error').textContent = "Text must be between 5 and 100 characters " : document.querySelector('.error').textContent = "";
}
document.querySelector('textarea').addEventListener('keyup', check);
// Get the query string from the URL
const queryString = window.location.search;

// Parse the query string
const params = new URLSearchParams(queryString);

// Get specific values

const value = params.get("value");
const key = params.get("key");
document.querySelector('textarea').value = value;
const edit_value = (key, todo) => {
    document.querySelector('.error').classList.add('green');
    document.querySelector('.error').textContent = "Edited";
    localStorage.setItem(key, todo)
}
const edit = () => {
    event.preventDefault();
    const todo = document.querySelector('textarea').value;
    todo.length < 5 || todo.length > 100 ? document.querySelector('.error').textContent = "Text must be between 5 and 100 characters " : edit_value(key, todo);
}
document.querySelector('form').addEventListener('submit', edit)