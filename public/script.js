document.addEventListener('DOMContentLoaded', function () {
    const quoteText = document.getElementById('quotetext');
    const quoteAuthor = document.getElementById('quoteauthor');
    const generateBtn = document.getElementById('generate');
  
   
  
    function generateQuote() {
    // Make a request to the Quotable API
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {

      // Update the quote text with the fetched quote
      quoteText.textContent = data.content;
      quoteAuthor.textContent = ` -- ${data.author}`;
    });
};

generateQuote();
generateBtn.addEventListener('click', () =>{
    generateQuote();
});

});