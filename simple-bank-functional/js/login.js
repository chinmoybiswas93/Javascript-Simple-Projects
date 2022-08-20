const userName = document.getElementById('user');
const passwordField = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', function(){
    let user = userName.value;
    let password = passwordField.value;
    if(user == 'Chinmoy' && password == '1234'){
        window.location.href = 'bank.html';
    }else {
        alert('invalid user');
    }
})