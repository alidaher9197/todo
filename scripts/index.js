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





}
const signin_form = document.querySelector('#signin-form').addEventListener('submit', checkuser);