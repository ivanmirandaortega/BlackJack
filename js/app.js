/*----------------- Constants -----------------*/
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '8', '9', '10', 'J', 'Q', 'K'];

// master deck variable that contains all 52 cards 
const masterDeck = buildDeck();

let backs = [
    'imgs/card-decks/backs/blue.svg',
    'imgs/card-decks/backs/red.svg'
];
let clubs = [
    'imgs/card-decks/clubs/clubs-A.svg', 
    'imgs/card-decks/clubs/clubs-r02.svg', 
    'imgs/card-decks/clubs/clubs-r03.svg', 
    'imgs/card-decks/clubs/clubs-r04.svg', 
    'imgs/card-decks/clubs/clubs-r05.svg',
    'imgs/card-decks/clubs/clubs-r06.svg', 
    'imgs/card-decks/clubs/clubs-r07.svg',
    'imgs/card-decks/clubs/clubs-r08.svg',
    'imgs/card-decks/clubs/clubs-r09.svg',
    'imgs/card-decks/clubs/clubs-r10.svg',
    'imgs/card-decks/clubs/clubs-J.svg',
    'imgs/card-decks/clubs/clubs-K.svg',
    'imgs/card-decks/clubs/clubs-Q.svg'
];
let diamonds = [
    'imgs/card-decks/diamonds/diamonds-A.svg',
    'imgs/card-decks/diamonds/diamonds-r02.svg',
    'imgs/card-decks/diamonds/diamonds-r03.svg',
    'imgs/card-decks/diamonds/diamonds-r04.svg',
    'imgs/card-decks/diamonds/diamonds-r05.svg',
    'imgs/card-decks/diamonds/diamonds-r06.svg',
    'imgs/card-decks/diamonds/diamonds-r07.svg',
    'imgs/card-decks/diamonds/diamonds-r08.svg',
    'imgs/card-decks/diamonds/diamonds-r09.svg',
    'imgs/card-decks/diamonds/diamonds-r10.svg', 
    'imgs/card-decks/diamonds/diamonds-J.svg',
    'imgs/card-decks/diamonds/diamonds-K.svg',
    'imgs/card-decks/diamonds/diamonds-Q.svg'
];
let hearts = [
    'imgs/card-decks/hearts/hearts-A.svg',
    'imgs/card-decks/hearts/hearts-r02.svg',
    'imgs/card-decks/hearts/hearts-r03.svg',
    'imgs/card-decks/hearts/hearts-r04.svg',
    'imgs/card-decks/hearts/hearts-r05.svg',
    'imgs/card-decks/hearts/hearts-r06.svg',
    'imgs/card-decks/hearts/hearts-r07.svg',
    'imgs/card-decks/hearts/hearts-r08.svg',
    'imgs/card-decks/hearts/hearts-r09.svg',
    'imgs/card-decks/hearts/hearts-r10.svg',
    'imgs/card-decks/hearts/hearts-J.svg',
    'imgs/card-decks/hearts/hearts-K.svg',
    'imgs/card-decks/hearts/hearts-Q.svg'
];
let spades = [
    'imgs/card-decks/spades/spades-A.svg',
    'imgs/card-decks/spades/spades-r02.svg',
    'imgs/card-decks/spades/spades-r03.svg',
    'imgs/card-decks/spades/spades-r04.svg',
    'imgs/card-decks/spades/spades-r05.svg',
    'imgs/card-decks/spades/spades-r06.svg',
    'imgs/card-decks/spades/spades-r07.svg',
    'imgs/card-decks/spades/spades-r08.svg',
    'imgs/card-decks/spades/spades-r09.svg',
    'imgs/card-decks/spades/spades-r10.svg',
    'imgs/card-decks/spades/spades-J.svg',
    'imgs/card-decks/spades/spades-K.svg',
    'imgs/card-decks/spades/spades-Q.svg'
];

let cardImages = [backs, clubs, diamonds, hearts, spades];

/*------------ app state variables ----------*/
let newDeck;
let dealerHand;
let playerHand;
let dealerSum;
let playerSum;
let dealerCard1;
let dealerCard2;
let playerCard1;
let playerCard2;
let playerCard3;
let playerCard4;
let playerCard5;


/*--------- Cached Element References ---------*/ 
const dealerSumEl = document.querySelector('.dealer-sum')
const playerSumEl = document.querySelector('.player-sum');
const textUiEl = document.querySelector('.text-ui');
const card1El = document.querySelector('#card1');
const card1ImgEl = document.createElement('img');
const card2El = document.querySelector('#card2');
const card2ImgEl = document.createElement('img')
const card6El = document.querySelector('#card6');
const card6ImgEl = document.createElement('img');
const card7El = document.querySelector('#card7');
const card7ImgEl = document.createElement('img');
const card8El = document.querySelector('#card8');
const card8ImgEl = document.createElement('img');
const card9El = document.querySelector('#card9');
const card9ImgEl = document.createElement('img');

/*--------- Event Listeners ---------*/ 

// start game button that reshuffles the deck when clicked
const newGameBtn = document.getElementById('new-game');
newGameBtn.addEventListener('click', init);

// hit button that adds a new card to the player hand when click 
const hitBtn = document.getElementById('hit');
hitBtn.addEventListener('click', getPlayerHit);

// stay button 
const stayBtn = document.getElementById('stay'); 
stayBtn.addEventListener('click', stay);

/*--------- Functions ---------*/ 
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
    // console.log('player values:', playerCardValue);
    // add values from player card value array into one variable 
    // let initialPlayerValue = 0;
    const playerSumHandCardValue = playerCardValue.reduce(
        (value1, value2) => initialPlayerValue = value1 + value2
    );
    // console.log('player sum:', playerSumHandCardValue);
    return playerSumHandCardValue;
};

// dealerHand function 
function sumDealerHand () {
        // grab the value properties from the dealer hand array of objects
        const dealerCardValue = dealerHand.map(obj => Number(obj.value));
        // console.log('dealer values:',dealerCardValue);
        // add values from dealer card value array into one variable 
        // let initialDealerValue = 0;
        const dealerSumHandCardValue = dealerCardValue.reduce(
            (value1, value2) => initialDealerValue = value1 + value2
        );
        // console.log('dealer sum:',dealerSumHandCardValue);    
        return dealerSumHandCardValue;
};


function renderShuffledDeck () {
    dealerCard1 = dealerHand[0].card;
    dealerCard2 = dealerHand[1].card;
    playerCard1 = playerHand[0].card;
    playerCard2 = playerHand[1].card;
    cardImages.forEach(image => {
        image.forEach(file => {
            // what file is individual string/file
            // image is the array containing each string/file
            // console.log(file)
            // console.log('dealer card 1:',dealerCard1, 'dealer card 2:', dealerCard2)
            // split value1 into two (suit and rank)
            // compare using && with .includes in the string 
            let card1 = dealerCard1.split(' ');
            let suit1 = card1[0];
            let rank1 = card1[1];
            let card2 = dealerCard2.split(' ');
            let suit2 = card2[0];
            let rank2 = card2[1];
            let card3 = playerCard1.split(' ');
            let suit3 = card3[0];
            let rank3 = card3[1];
            let card4 = playerCard2.split(' ');
            let suit4 = card4[0];
            let rank4 = card4[1];
            // console.log(rank)
            if (file.includes(suit1) && file.includes(rank1)) {
                card1El.style.backgroundColor = 'white';
                card1ImgEl.src = file;
                card1El.appendChild(card1ImgEl);
            }; 
            if (file.includes(suit2) && file.includes(rank2)) {
                card2El.style.backgroundColor = 'white';
                card2ImgEl.src = file;
                card2El.appendChild(card2ImgEl);
            };
            if (file.includes(suit3) && file.includes(rank3)) {
                card6El.style.backgroundColor = 'white';
                card6ImgEl.src = file;
                card6El.appendChild(card6ImgEl);
            };
            if (file.includes(suit4) && file.includes(rank4)) {
                card7El.style.backgroundColor = 'white';
                card7ImgEl.src = file;
                card7El.appendChild(card7ImgEl);
            };
        });
    });
};

// function that renders the hit cards from the player 
function renderPlayerHitCard() {
    playerCard3 = playerHand[2].card;
    playerCard4 = playerHand[3].card;
    cardImages.forEach(image => {
        image.forEach(file => {
            let card5 = playerCard3.split(' ');
            let suit5 = card5[0];
            let rank5 = card5[1];
            let card6 = playerCard4.split(' ');
            let suit6 = card6[0];
            let rank6 = card6[1];
            if (file.includes(suit5) && file.includes(rank5)) {
                card8El.style.backgroundColor = 'white';
                card8ImgEl.src = file;
                card8El.appendChild(card8ImgEl);
            } else if(file.includes(suit6) && file.includes(rank6)) {
                card9El.style.backgroundColor = 'white';
                card9ImgEl.src = file;
                card9El.appendChild(card9ImgEl);
            };
        });
    });
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
    // console.log('dealer hand:',dealerHand);
    // itereate through the next 2 cards from the newDeck 
    for(let i = 2; i < 4; i++) {
        // place the next 2 cards into the player hand 
        let playerCards = {};
        playerCards.card =`${newDeck[i].face}`;
        playerCards.value = `${newDeck[i].value}`;
        playerHand.push(playerCards);
    };
    // console.log('player hand:', playerHand);

    textUiEl.innerText = '';

    // sum the value of dealerHand cards 
    dealerSum = sumDealerHand();
    dealerSumEl.innerText = dealerSum;
    // card1El.src = clubs[0];
    // dealerDecision();
    // getDealerHit();
    // sum the value of playerHand cards
    playerSum = sumPlayerHand();
    playerSumEl.innerText = playerSum;
    outcome();
    renderShuffledDeck();
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
    // console.log(dealerHand);
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
    // console.log(playerHand);
    return playerHand;
};

// get playerHit function 
function getPlayerHit () {
    playerHit();
    playerSum = sumPlayerHand();
    playerSumEl.innerText = playerSum;
    outcome();
    getDealerHit();
    renderPlayerHitCard();
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