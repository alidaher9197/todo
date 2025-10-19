//start toggles
let togglePassword = document.querySelector('#old-password');
let passwordField = document.querySelector('#password');
let togglePassword1 = document.querySelector('#new-password');
let new_passwordField = document.querySelector('#new-password-field');
let togglePassword2 = document.querySelector('#re-password');
let re_passwordField = document.querySelector('#re-password-field');
togglePassword.addEventListener('click', function() {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
togglePassword1.addEventListener('click', function() {
    const type = new_passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    new_passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
togglePassword2.addEventListener('click', function() {
    const type = re_passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    re_passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
//end toggles
const chech = () => {
    document.querySelector(".error").classList.remove("green");
    (new_passwordField.value.length < 6 || new_passwordField.value.length > 20) ? document.querySelector(".error").innerHTML = "Password must be between 6 and 20":
        new_passwordField.value == re_passwordField.value ? document.querySelector(".error").innerHTML = "" : (document.querySelector(".error").innerHTML = "Password didn't match");
}
new_passwordField.addEventListener('keyup', chech)
re_passwordField.addEventListener('keyup', chech)


const check_cokies = () => {


    document.querySelector(".error").classList.add("green")
    document.querySelector(".error").innerHTML = "Password changed";
}
const edit_pass = () => {
    event.preventDefault();
    const old_password = document.querySelector('#password');
    const new_password = document.querySelector('#new-password-field');
    const re_password = document.querySelector('#re-password-field');

    (new_password.value.length < 6 || new_password.value.length > 20) ? document.querySelector(".error").innerHTML = "Password must be between 6 and 20":
        new_password.value == re_password.value ? check_cokies() :
        (document.querySelector(".error").innerHTML = "Password didn't match");
}
document.querySelector('form').addEventListener('submit', edit_pass)