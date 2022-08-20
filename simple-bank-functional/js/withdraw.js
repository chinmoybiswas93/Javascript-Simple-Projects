document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawAmount = getInputValueByID("withdraw-amount");
    const currentWithdraw = getElementValueByID("current-withdraw-amount");
    const currentAvailable = getElementValueByID("current-available-amount");

    if(withdrawAmount > 0){
        if(currentAvailable > withdrawAmount) {
            setValueById('current-withdraw-amount', ( currentWithdraw + withdrawAmount));
        setValueById('current-available-amount', (currentAvailable - withdrawAmount));
        }
        else {
            alert('Not Enough Balance')
        }

    } else {
        alert('Enter Withdraw amount')
    }
    document.getElementById('withdraw-amount').value = '';
  });