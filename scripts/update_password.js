let togglePassword = document.querySelector('#old-password');
let passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function() {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the icon class (e.g., Font Awesome classes)
    this.classList.toggle('fa-eye-slash');
});

let togglePassword1 = document.querySelector('#new-password');
let new_passwordField = document.querySelector('#new-password-field');

togglePassword1.addEventListener('click', function() {
    const type = new_passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    new_passwordField.setAttribute('type', type);

    // Toggle the icon class (e.g., Font Awesome classes)
    this.classList.toggle('fa-eye-slash');
});

let togglePassword2 = document.querySelector('#re-password');
let re_passwordField = document.querySelector('#re-password-field');

togglePassword2.addEventListener('click', function() {
    const type = re_passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    re_passwordField.setAttribute('type', type);

    // Toggle the icon class (e.g., Font Awesome classes)
    this.classList.toggle('fa-eye-slash');
});

const chech = () => {

    (new_passwordField.value.length < 6 || new_passwordField.value.length > 20) ? document.querySelector(".error").innerHTML = "Password must be between 6 and 20":
        new_passwordField.value == re_passwordField.value ? document.querySelector(".error").innerHTML = "" : (document.querySelector(".error").innerHTML = "Password didn't match");
}
new_passwordField.addEventListener('keyup', chech)
re_passwordField.addEventListener('keyup', chech)