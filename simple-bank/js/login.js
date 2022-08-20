const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', function(){
    let email = emailField.value;
    let password = passwordField.value;
    if(email == 'Chinmoy' && password == '1234'){
        window.location.href = 'bank.html';
    }else {
        alert('invalid user');
    }
})