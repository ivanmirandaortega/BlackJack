// deck of cards constants
const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '8', '9', '10', 'J', 'Q', 'K'];

// master deck variable that contains the buildDeck objects 
const masterDeck = buildDeck();

// app state variable 
let newDeck;
let dealerHand;
let playerHand;


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


// gets the generated shuffle deck 
function getShuffleDeck() {
    newDeck = shuffleDeck(); 
    dealerHand = [];
    playerHand = [];
    // iterate through the first 2 cards from the newDeck to push towards the dealer hand 
    for(let i = 0; i < 2; i++) {
        let dealerCards = `${newDeck[i].value} of ${newDeck[i].face}`
        dealerHand.push(dealerCards);
    }
    console.log('dealer hand:',dealerHand)
}

getShuffleDeck();

