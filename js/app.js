
// Define UI Variables
const nextQuoteButton = document.querySelector('#quote-btn');
const quote = document.querySelector('.text');
const author = document.querySelector('.author');

const quotesCollection = [
    {
        quote: "I was gonna rip his heart out. I'm the best ever. I'm the most brutal and vicious, the most ruthless champion there has ever been. No one can stop me. Lennox is a conqueror? No! He's no Alexander! I'm Alexander! I'm the best ever. I'm Sonny Liston. I'm Jack Dempsey. There's never been anyone like me. I'm from their cloth. There is no one who can match me. My style is impetuous, my defense is impregnable, and I'm just ferocious. I want his heart! I want to eat his children! Praise be to Allah!",
        person: "Mike Tyson",
        outputDetails: function() {
            return `${this.quote} - ${this.person}`;
        }
        
    },
    {
        quote: "Anyone who lives within their means suffers from a lack of imagination.",
        person: "Oscar Wilde",
        outputDetails: function() {
            return `${this.quote} - ${this.person}`;
        }
        
    },
    {
        quote: "Do your duty today and repent tomorrow.",
        person: "Mark Twain",
        outputDetails: function() {
            return `${this.quote} - ${this.person}`;
        }
        
    },
    {
        quote: "When you come to a fork in the road, take it.",
        person: "Yogi Berra",
        outputDetails: function() {
            return `${this.quote} - ${this.person}`;
        }
        
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.",
        person: "Steve Jobs",
        outputDetails: function() {
            return `${this.quote} - ${this.person}`;
        }
        
    },
    {
        quote: "Tell me what you eat, and I will tell you what you are.",
        person: "Jean Anthelme Brillat-Savarin",
        outputDetails: function() {
            return `${this.quote} - ${this.person}`;
        }
        
    }
];

// console.log(quotesCollection[5].outputDetails());

// Add Event Listeners
nextQuoteButton.addEventListener('click', combinedHandler);

// Functions List
function callRandomQuote() {
    // Below code takes Math.random and rolls random number from 0 to max number of entries in quotesCollection then makes them integers and gives output as random int from 0 to ceiling of number of objects.
    let random =  Math.floor(Math.random() * quotesCollection.length);

    return random;
}

function updateTextAndAuthor(index) {
    quote.innerText = quotesCollection[index].quote;
    author.innerText = quotesCollection[index].person;
}

function combinedHandler() {
   let randomIndex =  callRandomQuote();
    updateTextAndAuthor(randomIndex);
}