const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// show loader
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
loader.hidden = true;

//hide loader
function compplete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}


let apiQuotes = [];

// ----------fetching data-----------
fetch('https://type.fit/api/quotes')
.then(res => res.json())
.then(data => display(data))


function display (props) {
    apiQuotes = props;
    newQuote()
}



function newQuote() {
    //pick random quote from apiQuotes array
    const quote = apiQuotes[ Math.floor( Math.random() * apiQuotes.length)];

    // if author filled is empty 
    if(!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    // check if the quote length is too long
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // authorText.textContent = quote.author;
    quoteText.textContent = quote.text;   
}

// Tweet Quote 
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// getQuote();

