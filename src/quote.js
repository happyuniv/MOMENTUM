import quoteList from './quoteList.js';

const quote = () => {
    const $quote = document.querySelector('.quote');
    const quoteText = document.createElement('span');
    quoteText.className = "quote-text";
    const quoteAuthor = document.createElement('span');
    quoteAuthor.className = "quote-author";

    const selectedQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
    quoteText.textContent = selectedQuote.quote;
    quoteAuthor.textContent = selectedQuote.author;

    $quote.appendChild(quoteText);
    $quote.appendChild(quoteAuthor);
}

quote();