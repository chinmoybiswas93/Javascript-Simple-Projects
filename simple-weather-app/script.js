const notificationElement = document.querySelector('.notification');
const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temparature-value');
const descElement = document.querySelector('.temparature-description');
const locationElement = document.querySelector('.location');

// console.log(notificationElement,iconElement,tempElement,descElement,locationElement);


// ---------------dummy weather object------------
const weather = { };
weather.temparature = {
    unit: 'celsius'
}

// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

// check if geolocation is avaiable on device
if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition,showError);
}else{
    notificationElement.style.display = 'block';
    notificationElement.innerHTML = `<p> Your Browser dosen't support location</p>`;
}


// //getting users' position
function setPosition (position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude,longitude);
}

// // if position / location access is denied
function showError (error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>Couldn't get the location: ${error}</p>`;
}

function getWeather (latitude,longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temparature.value = Math.floor(data.main.temp-273);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        })
}


// ------------------display weather function-----------------
function displayWeather () {
    if(weather.temparature.value === undefined){ 
        tempElement.innerHTML = `- ° <span>C</span>`;
    } else {
        tempElement.innerHTML = `${weather.temparature.value} ° <span>C</span>`;
    }
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png">`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = weather.city + ", " +weather.country;
}

function celciusToFahrenheit (temparature) {
    return (temparature * 9/5) + 32;
}

// ------------------changing temparature----------------
tempElement.addEventListener('click', function(){

        //if we dont get any temparature value form api
        if(weather.temparature.value === undefined){ 
            return;
        };

        //if we got temparature value from the api
        if(weather.temparature.unit === 'celsius') {
            let fahrenheit = celciusToFahrenheit(weather.temparature.value);
            fahrenheit = Math.floor(fahrenheit);
            tempElement.innerHTML = `${fahrenheit} ° <span>F</span>`;
            weather.temparature.unit = 'fahrenheit';
        } else {
            tempElement.innerHTML = `${weather.temparature.value} ° <span>C</span>`;
            weather.temparature.unit = 'celsius'
        }
})