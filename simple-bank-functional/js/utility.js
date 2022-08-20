// getting amount from input field 
function getInputValueByID(elementId){
    const inputField = document.getElementById(elementId);
    const value = inputField.value;
    return parseFloat(value);
}

// getting amount in number
function getElementValueByID(elementId){
    const element = document.getElementById(elementId);
    const value = element.innerText;
    return parseFloat(value);
}

// setting values
function setValueById(elementId, amount){
    const element = document.getElementById(elementId);
    element.innerText = amount;
}