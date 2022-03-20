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
    // iterate through the first 2 cards from the newDeck
    for(let i = 0; i < 2; i++) {
        // place the first 2 dealer cards into the dealer hand
        let dealerCards = {};
        dealerCards.card = `${newDeck[i].face}`;
        dealerCards.value = `${newDeck[i].value}`;
        dealerHand.push(dealerCards);
    }
    console.log('dealer hand:',dealerHand)
    // itereate through the next 2 cards from the newDeck 
    for(let i = 2; i < 4; i++) {
        // place the next 2 cards into the player hand 
        let playerCards = {}
        playerCards.card =`${newDeck[i].face}`
        playerCards.value = `${newDeck[i].value}`
        playerHand.push(playerCards)
    }
    console.log('player hand:', playerHand)

    // sum the value of dealerHand cards 
    // grab the value properties from the dealer hand array of objects
    const dealerCardValue = dealerHand.map(obj => Number(obj.value));
    console.log('dealer: ',dealerCardValue)
    // add values from dealer card value array into one variable 
    let initialDealerValue = 0;
    const dealerSumHandCardValue = dealerCardValue.reduce(
        (value1, value2) => initialDealerValue = value1 + value2
    )
    console.log('dealer: ',dealerSumHandCardValue)

    // sum the value of playerHand cards
    // grab the value properties from the player hand array of objects 
    const playerCardValue = playerHand.map(obj => Number(obj.value));
    console.log('player: ', playerCardValue);
    // add values from player card value array into one variable 
    let initialPlayerValue = 0;
    const playerSumHandCardValue = playerCardValue.reduce(
        (value1, value2) => initialPlayerValue = value1 + value2
    )
    console.log('player: ', playerSumHandCardValue)
}