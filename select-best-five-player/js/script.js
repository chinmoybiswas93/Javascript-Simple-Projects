const selectButtons = document.getElementsByClassName('select-btn');

for(const button of selectButtons) {
    button.addEventListener('click', function(event){
        const list = document.querySelectorAll('#selected-player-list li')
        if( list.length < 5) {
            addPlayerName(event);
        } else {
            alert('You have selected Five')
        }
    });
}
