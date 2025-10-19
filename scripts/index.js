document.cookie != "" && (window.location = 'all_todo.html');
document.querySelector("#username").addEventListener('keyup', check_signin);
document.querySelector("#password").addEventListener('keyup', check_signin);

let togglePassword = document.querySelector('#togglePassword');
let passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function() {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the icon class (e.g., Font Awesome classes)
    this.classList.toggle('fa-eye-slash');
});



const checkuser = () => {
    const user = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    time_to_live = 60 * 60 * 24 * 7;
    check_validity_user(user) && check_validity_password(password) && (document.cookie = `${user}=${password}; max-age =${time_to_live}`);






}
const signin_form = document.querySelector('#signin-form').addEventListener('submit', checkuser);