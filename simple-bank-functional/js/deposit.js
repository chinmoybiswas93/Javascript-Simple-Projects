document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositAmount = getInputValueByID("deposit-amount");
  const currentDeposit = getElementValueByID("current-deposit-amount");
  const currentAvailable = getElementValueByID("current-available-amount");

  if(depositAmount > 0){
    setValueById('current-deposit-amount', (depositAmount + currentDeposit));
    setValueById('current-available-amount', (currentAvailable + depositAmount));
    
  } else {
    alert('Enter a amount more than zero');
  }
  document.getElementById('deposit-amount').value = '';
});


