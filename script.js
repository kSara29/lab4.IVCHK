let email = document.getElementById("exampleInputEmail1")
let password = document.getElementById("exampleInputPassword1")
let confirm_pass = document.getElementById("exampleConfirmPassword1")
let log_email = document.getElementById("exampleInputEmail11")
let log_pass = document.getElementById("exampleInputPassword12")
let error_log_email = document.getElementById("error-log-email")
let error_log_pass = document.getElementById("error-log-pass")
let error_pass = document.getElementById("error-pass")
let error_pass_up = document.getElementById("error-pass-up")
let error_pass_dw = document.getElementById("error-pass-dw")
let error_pass_sym = document.getElementById("error-pass-sym")
let error_pass_dig = document.getElementById("error-pass-dig")
let error_conf_pass = document.getElementById("error-conf-pass")
form = document.querySelector('.form')
login = document.querySelector('.login')
logout = document.getElementById('logout')
let ok = false
let check = false
let arr_email = [document.getElementsByClassName("email").value]
let arr_pass = [document.getElementsByClassName("password").value]
let reset_pass = document.getElementById("reset")
let hello = document.getElementById("hidden")
let time = document.querySelector('.timeout')
let Timeout = false

form.addEventListener('submit',function (event){
    event.preventDefault()
    Pass()
    ConfirmPass()
    if(ok){
        arr_email.push(email.value)
        arr_pass.push(password.value)
        alert("Вы успешно зарегистрировались")
    }
    else{
    	alert("Регистрация провалилась, попробуйте еще раз.")
    }
})

login.addEventListener('submit',function (event){
    event.preventDefault()
    Login()

    if (check){
    	alert("Вы вошли в систему")
    }
    else{
    	alert("Вход не выполнен")
    }

})


function Pass() {

    let lowerCaseLetters = /[a-z]/g;
    if(password.value.match(lowerCaseLetters)) {
        ok = true
    } else {
        ok = false
    }
    
    let upperCaseLetters = /[A-Z]/g;
    if(password.value.match(upperCaseLetters)) {
        ok = true
    } else {
        ok = false
    }

    let numbers = /[0-9]/g;
    if(password.value.match(numbers)) {
        ok = true
    } else {
        ok = false
    }

    let symbols = /[!@#$%^&*()_={}|;"<,>.+?/-]/g
    if(password.value.match(symbols)){
        ok = true
    } else{
        ok = false
    }
    if(password.value.length < 8) {
        ok = false
    }
    else{
        ok = true
    }
}

function ConfirmPass(){
    if (confirm_pass.value != password.value){
        ok = false
    }
    else{
        ok = true
    }
}

function Login(){

    for(let i=1; i<arr_email.length; i++){
        if (arr_email[i] == log_email.value){
            check = true
        }
        else {
            check = false
        }
    }

    for (let j=1; j<arr_pass.length; j++){
        if(arr_pass[j] == log_pass.value){
            check = true
        }
        else if (arr_pass[j] != log_pass.value){
            check = false
        }
    }
}






