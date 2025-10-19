const check = () => {
    document.querySelector('.error').textContent = "";
    document.querySelector('.error').classList.remove("green");
    const todo = document.querySelector('textarea').value;
    todo.length < 5 || todo.length > 100 ? document.querySelector('.error').textContent = "Text must be between 5 and 100 characters " : document.querySelector('.error').textContent = "";
}
const add_to_local = () => {
    const todo = document.querySelector('textarea').value;
    const dateTimeStamp = new Date().toLocaleString("en-US");
    const value = { 'todo': todo, 'date': dateTimeStamp }
    let id;
    do {
        id = Math.floor(Math.random() * 1000000);
    } while (localStorage.getItem(id));
    localStorage.setItem(id, JSON.stringify(value));
    //localStorage.setItem(dateTimeStamp, todo);
    document.querySelector('.error').classList.add("green");
    document.querySelector('.error').textContent = "added sucessfully ";
    document.querySelector('textarea').value = "";
}
document.querySelector('textarea').addEventListener('keyup', check);
const add_todo = () => {
    event.preventDefault();
    const todo = document.querySelector('textarea').value;
    todo.length < 5 || todo.length > 100 ? document.querySelector('.error').textContent = "Text must be between 5 and 100 characters " : add_to_local();
}
document.querySelector(".todo-form").addEventListener("submit", add_todo);