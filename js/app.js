// deck of cards constants
const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '8', '9', '10', 'J', 'Q', 'K'];

// master deck variable that contains the buildDeck objects 
const masterDeck = buildDeck();

// app state variable 
let newDeck;



// event listeners 

// start game button that reshuffles the deck when clicked
const newGameBtn = document.getElementById('new-game')
newGameBtn.addEventListener('click', getShuffleDeck);


// functions 
// master deck function creates a deck with 52 cards that includes all suits and ranks 
function buildDeck() {
    const deck = [];
    suits.forEach(suit => {
        ranks.forEach(rank => {
            let card = {
                face: `${suit} ${rank}`,
                value: Number(rank) || (rank === 'A' ? 11 : 10) 
            }
            deck.push(card);
        });
    });
    return deck
};

// shuffle deck function shuffles the master deck that contains 53 cards
function shuffleDeck() {
    // copy of master deck
    const tempDeck = [...masterDeck];
    const newShuffledDeck = [];
    while(tempDeck.length) {
        // random index 
        const rndIdx = Math.floor(Math.random() * tempDeck.length); 
        newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    return newShuffledDeck;
}

function getShuffleDeck() {
    newDeck = shuffleDeck(); 
    // for loop that shows the first 5 cards within the newDeck
    for(let i = 0; i < 5; i++) {
        console.log(`${newDeck[i].value} of ${newDeck[i].face}`)
    }
}

getShuffleDeck();
