const selectButtons = document.getElementsByClassName('select-btn');
const perPlayerInputField = document.getElementById('per-player-cost');
const calculateBtn = document.getElementById('calculate-btn');
const calculateTotalBtn = document.getElementById('calculate-total-btn');
const playerExpense = document.getElementById('player-expense');
const totalCost = document.getElementById('total-cost');

for(const button of selectButtons) {
    button.addEventListener('click', function(event){
        const list = document.querySelectorAll('#selected-player-list li');
        if( list.length < 5) {
            addPlayerName(event);
        } else {
            alert('You have selected Five')
        }
    });
}

calculateBtn.addEventListener('click', function(){
    calculateTotalPlayerCost();
    // perPlayerInputField.value = '';
})

calculateTotalBtn.addEventListener('click', function(){
    calculateTotal();
})

