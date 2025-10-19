const check_matching_password = (password, repassword) => password == repassword;
const check_signup = () => {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let re_password = document.querySelector('#rePassword').value;
    let error = document.querySelector("#error");
    document.querySelector(".error").classList.remove("green");
    check_matching_password(password, re_password) ?
        check_signin() :
        check_validity_password(password) && check_validity_user(username) ? error.innerHTML = "password didn't match" : !check_validity_password(password) && !check_validity_user(username) ? error.innerHTML = 'Username must be between 3 and 10 and <br>password must be between 6 and 20' : !check_validity_user(username) ? error.innerHTML = 'Username must be between 3 and 10' : error.innerHTML = 'Password must be between 6 and 20';
}
document.getElementById('username').addEventListener('keyup', check_signup);
document.getElementById('password').addEventListener('keyup', check_signup);
document.querySelector('#rePassword').addEventListener('keyup', check_signup);
let togglePassword = document.querySelector('#togglePassword');
let passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function() {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the icon class (e.g., Font Awesome classes)
    this.classList.toggle('fa-eye-slash');
});
let toggleRepassword = document.querySelector('#toggleRepassword');
let rePasswordField = document.querySelector('#rePassword');

toggleRepassword && toggleRepassword.addEventListener('click', function() {
    const type = rePasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
    rePasswordField.setAttribute('type', type);

    // Toggle the icon class (e.g., Font Awesome classes)
    this.classList.toggle('fa-eye-slash');
});
const checkuser = () => {
    event.preventDefault()
    const user = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    let re_password = document.querySelector('#rePassword').value;
    let error = document.querySelector("#error");
    check_validity_user(user) && check_validity_password(password) && check_matching_password(password, re_password) ? (error.innerHTML = "Your account is created ", error.classList.add("green")) : null;

}
const signup_form = document.querySelector('#signup-form').addEventListener('submit', checkuser);