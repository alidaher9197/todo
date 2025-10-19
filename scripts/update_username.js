const username = document.querySelector('#username');

const chech = () => {

    username.value.length >= 3 && username.value.length <= 10 ? document.querySelector('#error').innerHTML = "" : document.querySelector('#error').innerHTML = "Username must be between 3 and 10";
}
username.addEventListener('keyup', chech);