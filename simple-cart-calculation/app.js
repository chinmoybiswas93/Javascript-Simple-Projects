// Taking input field
let razerOneInput = document.getElementById('razer-one');
let razerTwoInput = document.getElementById('razer-two');
let targealInput = document.getElementById('targeal');

//taking total fields
let subtotalPeice  = document.getElementById('subtotal');
let taxPrice = document.getElementById('tax');
let totalPrice = document.getElementById('total');


// Taking Buttons
let razerOnePlus = document.getElementById('razer-one-plus');
let razerOneMinus = document.getElementById('razer-one-minus');

let razerTwoPlus = document.getElementById('razer-two-plus');
let razerTwoMinus = document.getElementById('razer-two-minus');

let targealPlus = document.getElementById('targeal-plus');
let targealMinus = document.getElementById('targeal-minus');

//proceed checkout button
let checkoutButton = document.getElementById('check-out');

// getting price
const razerOnePrice = 200;
const razerTwoPrice = 100;
const targealPrice = 50;

// subtotal prices
let razerOneSubtotal = document.getElementById('razer-one-subtotal');
let razerTwoSubtotal = document.getElementById('razer-two-subtotal');
let targealSubtotal = document.getElementById('targeal-subtotal');


// Razer one adding event Listeners
razerOnePlus.addEventListener("click", ()=> {
    const count = itemQuantityCount(razerOneInput, true);
    const subtotalPeice = razerOnePrice * count;
    updateSubtotal(razerOneSubtotal,subtotalPeice)
    updateTotal();
})
razerOneMinus.addEventListener("click", ()=> {
    const count =  itemQuantityCount(razerOneInput, false);
    const subtotalPeice = razerOnePrice * count;
    updateSubtotal(razerOneSubtotal,subtotalPeice)
    updateTotal();
})

// Razer two adding event Listeners
razerTwoPlus.addEventListener("click", ()=> {
    const count = itemQuantityCount(razerTwoInput, true);
    const subtotalPeice = razerTwoPrice * count;
    updateSubtotal(razerTwoSubtotal,subtotalPeice)
    updateTotal();
})
razerTwoMinus.addEventListener("click", ()=> {
   const count =  itemQuantityCount(razerTwoInput, false);
   const subtotalPeice = razerTwoPrice * count;
   updateSubtotal(razerTwoSubtotal,subtotalPeice)
   updateTotal();
})

// Targeal adding event Listeners
targealPlus.addEventListener("click", ()=> {
    const count = itemQuantityCount(targealInput, true);
    const subtotalPeice = targealPrice * count;
    updateSubtotal(targealSubtotal,subtotalPeice)
    updateTotal();
})
targealMinus.addEventListener("click", ()=> {
    const count = itemQuantityCount(targealInput, false);
    const subtotalPeice = targealPrice * count;
    updateSubtotal(targealSubtotal,subtotalPeice)
    updateTotal();
})

// Increase Decrease Function 
function itemQuantityCount(item, istrue){
    let itemCount = parseInt(item.value);
    if(istrue === true) {
        itemCount += 1;
        item.value = itemCount;
        return item.value;
    } else {
        itemCount -= 1;
        if (itemCount < 0){
            item.value = 0;
            return item.value;
        }else {
            item.value = itemCount;
            return item.value;
        }
    }
}


//total count
function updateTotal() {
    // console.log(totalPrice, subtotalPeice, taxPrice)
    let subtotal = razerOneInput.value * razerOnePrice + razerTwoInput.value * razerTwoPrice + targealInput.value * targealPrice;
    subtotalPeice.textContent = "$" + subtotal;

    let tax = subtotal * 15 / 100;
    taxPrice.textContent = "$" + tax;

    let grandTotal = subtotal + tax;
    totalPrice.textContent = "$" + grandTotal;
}

// update subtotal values
function updateSubtotal(element, price) {
    element.innerText = price;
}

checkoutButton.addEventListener("click", function(){
    document.getElementById('cart').style.display = "none";
    document.getElementById('message').style.display = "block";

})