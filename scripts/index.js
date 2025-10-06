const check_signin = (id) => {

    let length_username = document.getElementById('username').value.length;
    let length_password = document.getElementById('password').value.length;
    length_password >= 6 && length_password <= 20 && length_username >= 3 && length_username <= 10 ? document.getElementById('error').innerHTML = '' : (length_password < 6 || length_password > 20) && (length_username < 3 || length_username > 10) ? document.getElementById('error').innerHTML = 'Username must be between 3 and 10 and <br>password must be between 6 and 20' : length_username < 3 || length_username > 10 ? document.getElementById('error').innerHTML = 'Username must be between 3 and 10' : document.getElementById('error').innerHTML = 'Password must be between 6 and 20';
}
const check_signup = (id) => {

    let length_username = document.getElementById('username').value.length;
    let length_password = document.getElementById('password').value.length;
    let length_re_password = document.getElementById('rePassword').value.length;
    let password = document.getElementById('password').value;
    let re_password = document.getElementById('rePassword').value;
    password == re_password ?
        length_password >= 6 && length_password <= 20 && length_username >= 3 && length_username <= 10 ? document.getElementById('error').innerHTML = '' : (length_password < 6 || length_password > 20) && (length_username < 3 || length_username > 10) ? document.getElementById('error').innerHTML = 'Username must be between 3 and 10 and <br>password must be between 6 and 20' : length_username < 3 || length_username > 10 ? document.getElementById('error').innerHTML = 'Username must be between 3 and 10' : document.getElementById('error').innerHTML = 'Password must be between 6 and 20' :

        length_password >= 6 && length_password <= 20 && length_username >= 3 && length_username <= 10 ? document.getElementById('error').innerHTML = "'password didn't match" : (length_password < 6 || length_password > 20) && (length_username < 3 || length_username > 10) ? document.getElementById('error').innerHTML = 'Username must be between 3 and 10 and <br>password must be between 6 and 20' : length_username < 3 || length_username > 10 ? document.getElementById('error').innerHTML = 'Username must be between 3 and 10' : document.getElementById('error').innerHTML = 'Password must be between 6 and 20';
}

let togglePassword = document.getElementById('togglePassword');
let passwordField = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the icon class (e.g., Font Awesome classes)
    this.classList.toggle('fa-eye-slash');
});
let toggleRepassword = document.getElementById('toggleRepassword');
let rePasswordField = document.getElementById('rePassword');

toggleRepassword.addEventListener('click', function() {
    const type = rePasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
    rePasswordField.setAttribute('type', type);

    // Toggle the icon class (e.g., Font Awesome classes)
    this.classList.toggle('fa-eye-slash');
});

const checkPasswords = () => { return rePasswordField.value == passwordField.value };