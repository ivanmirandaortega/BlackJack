// deck of cards constants
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '8', '9', '10', 'J', 'Q', 'K'];

const masterDeck = buildDeck();

// build master deck function 
function buildDeck() {
    const deck = [];
    suits.forEach(suit => {
        ranks.forEach(rank => {
            deck.push({
                face: `${suit}${rank}`,
                value: Number(rank) || (rank === 'A' ? 11 : 10)
            });
        });
    });
    return deck
};