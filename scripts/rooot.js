const check_validity_user = (user) => user.length >= 3 && user.length <= 10;
const check_validity_password = (password) => password.length >= 6 && password.length <= 20;
const check_signin = () => {

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const error = document.querySelector("#error");

    check_validity_password(password) && check_validity_user(username) ? error.innerHTML = '' : !check_validity_password(password) && !check_validity_user(username) ? error.innerHTML = 'Username must be between 3 and 10 and <br>password must be between 6 and 20' : !check_validity_user(username) ? error.innerHTML = 'Username must be between 3 and 10' : error.innerHTML = 'Password must be between 6 and 20';
}