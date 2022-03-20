// deck of cards constants
const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '8', '9', '10', 'J', 'Q', 'K'];

// master deck variable that contains the buildDeck objects 
const masterDeck = buildDeck();

// master deck function 
function buildDeck() {
    const deck = [];
    suits.forEach(suit => {
        ranks.forEach(rank => {
            deck.push({
                face: `${suit} ${rank}`,
                value: Number(rank) || (rank === 'A' ? 11 : 10) 
            });
        });
    });
    return deck
};

// shuffle deck funciton 
function shuffleDeck() {
    
}