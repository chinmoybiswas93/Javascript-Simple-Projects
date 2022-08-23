function addPlayerName(event) {
  const player = event.path[2].childNodes[3].childNodes[1].innerText;
  const list = document.getElementById("selected-player-list");
  list.innerHTML += `<li>${player}</li>`;
  event.target.disabled = true;
}

function calculateTotalPlayerCost() {
  const totalSelectedPlayer = document.querySelectorAll('#selected-player-list li').length;
  const playerValue = parseFloat(perPlayerInputField.value);

  if(playerValue > 0 ) {
   playerExpense.innerText = totalSelectedPlayer * playerValue;
  }
  else {
    alert('Please Enter a number')
  }

}

function calculateTotal() {
  const managerCost = parseFloat(document.getElementById('manager').value);
  const coachCost = parseFloat(document.getElementById('coach').value);
  const playerCost = parseFloat(playerExpense.innerText)

  if(managerCost > 0 && coachCost > 0 ) {
    totalCost.innerText = playerCost + managerCost + coachCost;
   }
   else {
     alert('Please Enter Cost in number');
   }
}


