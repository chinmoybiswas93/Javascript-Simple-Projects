const withdrawInput = document.getElementById("withdraw");

const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

// -------------deposit function -------------------------

depositBtn.addEventListener("click", function () {
  const depositInput = document.getElementById("deposit");
  const deposit = parseInt(depositInput.value);
  if (deposit > 0) {
    const currentDepositAmount = parseInt(
      document.getElementById("current-deposit-amount").innerText
    );

    const currentAvailableAmount = parseInt(
      document.getElementById("current-available-amount").innerText
    );

    document.getElementById("current-deposit-amount").innerText =
      currentDepositAmount + deposit;

    document.getElementById("current-available-amount").innerText =
      currentAvailableAmount + deposit;
  } else {
    alert("Enter Amount in Number more than 0");
  }
});

// -------------withdraw function -------------------------

withdrawBtn.addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw");
  const withdraw = parseInt(withdrawInput.value);
  if (withdraw > 0) {
    const currentWithdrawAmount = parseInt(
      document.getElementById("current-withdraw-amount").innerText
    );

    const currentAvailableAmount = parseInt(
      document.getElementById("current-available-amount").innerText
    );
    
    // ----------------check if balance is avaliable-----
    if (withdraw < currentAvailableAmount) {
      document.getElementById("current-withdraw-amount").innerText =
        currentWithdrawAmount + withdraw;

      document.getElementById("current-available-amount").innerText =
        currentAvailableAmount - withdraw;
    } else {
        alert("Not Enough money in your account");
    }

    withdrawInput.value = "";
  } else {
    alert("Enter Amount in Number more than 0");
  }
});
