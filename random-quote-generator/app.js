// const quoteContainer = document.getElementById('quote-container');
// const quoteText = document.getElementById('quote');
// const authorText = document.getElementById('author');
// const twitterBtn = document.getElementById('twitter');
// const newQuoteBtn = document.getElementById('new-quote');
// const loader = document.getElementById('loader');

// // show loader
// function loading() {
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }

// //hide loader
// function complete() {
//     quoteContainer.hidden = false;
//     loader.hidden = true;
// }


// let apiQuotes = [];

// // ----------getting new quote-------
// function newQuote() {
//     //show loader
//     loading()

//     //pick random quote from apiQuotes array
//     const quote = apiQuotes[ Math.floor( Math.random() * apiQuotes.length)];

//     // if author filled is empty 
//     if(!quote.author) {
//         authorText.textContent = "Unknown";
//     } else {
//         authorText.textContent = quote.author;
//     }

//     // check if the quote length is too long
//     if (quote.text.length > 100) {
//         quoteText.classList.add('long-quote');
//     } else {
//         quoteText.classList.remove('long-quote');
//     }
//     // authorText.textContent = quote.author;
//     quoteText.textContent = quote.text;

//     // hide loader
//     complete();
    
// }

// // //-------- Get quoutes form API-------------
//  async function getQuotes() {
//      loading();
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//         // console.log(apiQuotes);
//     } catch (error) {
//         // catch error
//     }
// } 



// // Tweet Quote 
// function tweetQuote() {
//     const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
//     window.open(twitterUrl, '_blank');
// }

// //event listerners
// newQuoteBtn.addEventListener('click', newQuote);
// twitterBtn.addEventListener('click', tweetQuote);



// // --------on load---------
// getQuotes();













