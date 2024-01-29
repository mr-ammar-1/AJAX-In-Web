function getRandomQuote() {
    const quoteContainer = document.getElementById('quoteContainer');

    // Make an AJAX request to Quotable REST API
    const apiUrl = 'https://api.quotable.io/random';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const quoteData = JSON.parse(xhr.responseText);
            displayQuote(quoteData, quoteContainer);
        } else {
            console.error('Error fetching quote:', xhr.statusText);
            quoteContainer.innerHTML = 'Error fetching quote. Please try again.';
        }
    };

    xhr.onerror = function () {
        console.error('Network error');
        quoteContainer.innerHTML = 'Network error. Please try again.';
    };

    xhr.send();
}

function displayQuote(quoteData, container) {
    const content = quoteData.content;
    const author = quoteData.author;

    const quoteInfo = `
        <blockquote>
            <p>${content}</p>
            <footer>${author}</footer>
        </blockquote>
    `;

    container.innerHTML = quoteInfo;
}
