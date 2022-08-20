setInterval(setClock, 1000)

const secondHand = document.querySelector ('[data-second-hand]')
const minuteHand = document.querySelector ('[data-minute-hand]')
const hourHand = document.querySelector ('[data-hour-hand]')
const digitalClockBox = document.getElementById('digitalClock')
const secondBox = document.getElementById('secondBox')

function setClock () {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = ( secondRatio + currentDate.getMinutes()) /60
    const hourRatio = ( minuteRatio + currentDate.getHours()) / 12 
    setRotation (secondHand, secondRatio)
    setRotation (minuteHand, minuteRatio)
    setRotation (hourHand, hourRatio)
    digitalClockBox.innerHTML =("0" + currentDate.getHours()).slice(-2) + ' : ' + ("0" + currentDate.getMinutes()).slice(-2) + "<br>" +  ("0" + currentDate.getSeconds()).slice(-2);
}

function setRotation (element, ratio) {
    element.style.setProperty('--rotation', ratio * 360)
} 

setClock()



