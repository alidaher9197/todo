const username = document.querySelector('#username');

const chech = () => {
    document.querySelector(".error").classList.remove("green");
    username.value.length >= 3 && username.value.length <= 10 ? document.querySelector('#error').innerHTML = "" : document.querySelector('#error').innerHTML = "Username must be between 3 and 10";
}
username.addEventListener('keyup', chech);

const check_cokies = () => {

    const allCookies = document.cookie.split(";");
    const new_username = document.querySelector('#username').value;
    const [key, value] = allCookies[0].split("=");
    console.log("First cookie name:", key.trim());
    console.log("First cookie value:", value);
    let time_to_live = 60 * 60 * 24 * 7;
    document.cookie = `${key}=null; max-age=0`;
    document.cookie = `${new_username}=${value}; max-age=${time_to_live}`;
    document.querySelector(".error").classList.add("green")
    document.querySelector(".error").innerHTML = "Username changed";
}
const edit_username = () => {
    event.preventDefault();
    const username = document.querySelector('#username');


    (username.value.length < 3 || username.value.length > 10) ? document.querySelector(".error").innerHTML = "Username must be between 3 and 10":
        check_cokies();
}
document.querySelector('form').addEventListener('submit', edit_username)