// deck of cards constants
const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '8', '9', '10', 'J', 'Q', 'K'];

// master deck variable that contains all 52 cards 
const masterDeck = buildDeck();

// app state variable 
let newDeck;
let dealerHand;
let playerHand;
let dealerSum;
let playerSum;


//DOM elements 
const dealerSumEl = document.querySelector('.dealer-sum')
const playerSumEl = document.querySelector('.player-sum');
const textUiEl = document.querySelector('.text-ui');

// event listeners 

// start game button that reshuffles the deck when clicked
const newGameBtn = document.getElementById('new-game');
newGameBtn.addEventListener('click', init);

// hit button that adds a new card to the player hand when click 
const hitBtn = document.getElementById('hit');
hitBtn.addEventListener('click', getPlayerHit);

// stay button 
const stayBtn = document.getElementById('stay'); 
stayBtn.addEventListener('click', stay)

// functions 
// master deck function creates a deck with 52 cards that includes all suits and ranks 
function buildDeck() {
    const deck = [];
    suits.forEach(suit => {
        ranks.forEach(rank => {
            let card = {
                face: `${suit} ${rank}`,
                value: Number(rank) || (rank === 'A' ? 11 : 10) 
            };
            deck.push(card);
        });
    });
    return deck;
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
    };
    return newShuffledDeck;
};


//sum function 
// playerHand function  
function sumPlayerHand () {
     // grab the value properties from the player hand array of objects 
     const playerCardValue = playerHand.map(obj => Number(obj.value));
     console.log('player values:', playerCardValue);
     // add values from player card value array into one variable 
     // let initialPlayerValue = 0;
     const playerSumHandCardValue = playerCardValue.reduce(
         (value1, value2) => initialPlayerValue = value1 + value2
     );
     console.log('player sum:', playerSumHandCardValue);
     return playerSumHandCardValue
};

// dealerHand function 
function sumDealerHand () {
        // grab the value properties from the dealer hand array of objects
        const dealerCardValue = dealerHand.map(obj => Number(obj.value));
        console.log('dealer values:',dealerCardValue);
        // add values from dealer card value array into one variable 
        // let initialDealerValue = 0;
        const dealerSumHandCardValue = dealerCardValue.reduce(
            (value1, value2) => initialDealerValue = value1 + value2
        );
        console.log('dealer sum:',dealerSumHandCardValue);    
        return dealerSumHandCardValue
};

// gets the generated shuffle deck 
function init() {
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
    };
    console.log('dealer hand:',dealerHand);
    // itereate through the next 2 cards from the newDeck 
    for(let i = 2; i < 4; i++) {
        // place the next 2 cards into the player hand 
        let playerCards = {};
        playerCards.card =`${newDeck[i].face}`;
        playerCards.value = `${newDeck[i].value}`;
        playerHand.push(playerCards);
    };
    console.log('player hand:', playerHand);

    textUiEl.innerText = '';

    // sum the value of dealerHand cards 
    dealerSum = sumDealerHand();
    dealerSumEl.innerText = dealerSum;
    // dealerDecision();
    // getDealerHit();
    // sum the value of playerHand cards
    playerSum = sumPlayerHand();
    playerSumEl.innerText = playerSum;
    outcome();
};

// getShuffleDeck()

// dealer hit 
function dealerDecision() {
    if (dealerSum <= 16) {
        dealerHit();
    } else if(dealerSum === 21) {
        console.log(`dealer wins`);
    } 
};

x = 4
function dealerHit() {
    const newCard = {};
    newCard.card = `${newDeck[x].face}`;
    newCard.value = `${newDeck[x].value}`;
    dealerHand.splice(j, 0, newCard);
    x++;
    j++;
    console.log(dealerHand);
    return dealerHand;
};

function getDealerHit() {
    dealerDecision();
    dealerSum = sumDealerHand();
};

// player hit 
//index position after game setup 
let i = 5;
// object index 
let j = 2;
function playerHit () {
    const newCard = {};
    newCard.card = `${newDeck[i].face}`;
    newCard.value = `${newDeck[i].value}`;
    playerHand.splice(j, 0, newCard);
    i++;
    j++;
    console.log(playerHand);
    return playerHand;
};

// get playerHit function 
function getPlayerHit () {
    playerHit();
    playerSum = sumPlayerHand();
    playerSumEl.innerText = playerSum;
    outcome();
    getDealerHit();
}

// win or lose scenario for player 
function outcome () {
    if (playerSum > 21) {
        textUiEl.textContent = `Dealer wins!`;
        console.log(`Game Over.`);
    } else if (playerSum === 21) {
        textUiEl.innerText = `Player win!`;
        console.log(`You win!`);
    } else if (dealerSum > 21) {
        textUiEl.textContent = `Player wins!`
    } else if (dealerSum === 21) {
        textUiEl.textContent = `Dealer wins!`
    } 
};


// comparison function 

function compareTotal () {
    if(dealerSum > 21) {
        textUiEl.textContent = `Player wins!`;
        console.log(`Player wins!`)
    } else if (playerSum > dealerSum) {
        textUiEl.textContent = `Player wins!`;
        console.log(`Dealer wins!`)
    } else if (playerSum < dealerSum) {
        textUiEl.textContent = `Dealer wins!`;
    } else if (dealerSum === playerSum) {
        textUiEl.textContent = `It's a tie!`
    }
};


// stay function 
function stay () {
    getDealerHit();
    dealerSumEl.innerText = dealerSum;
    compareTotal();
};
