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

const edit_cokie = () => {
    const key = document.querySelector('#password').value;
    console.log(document.cookie)
    const cookies = decodeURIComponent(document.cookie);
    const array = cookies.split("; ");
    const index = array.findIndex((element) => element.split("=")[1] === key);
    let username;
    let password;
    let new_password = document.querySelector('#new-password-field').value;

    let time_to_live = 60 * 60 * 24 * 7;
    (!((array.length == 1 && array[0] == "") || index == -1)) ?
    (username = array[index].split("=")[0], password = array[index].split("=")[1]) : (username = "", password = "");
    console.log(`key=${username},value=${password}`)
    document.cookie = `${username}=null; max-age=0`;
    document.cookie = `${username}=${new_password}; max-age=${time_to_live}`;
    document.querySelector(".error").classList.add("green")
    document.querySelector(".error").innerHTML = "Password changed";






}
const check_cokies = () => {
    //cokies values
    const key = document.querySelector('#password').value;
    console.log(document.cookie)
    const cookies = decodeURIComponent(document.cookie);
    const array = cookies.split("; ");
    const index = array.findIndex((element) => element.split("=")[1] === key);
    let result;
    (!((array.length == 1 && array[0] == "") || index == -1)) ?
    result = array[index].split("=")[1]: result = "";
    console.log(`result=${result}`)
    result == "" ? document.querySelector(".error").innerHTML = "Password is wrong" : edit_cokie();

    //cokies end
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