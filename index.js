'use strict';

/*
*   Card = [Suit, Name, Value]
*
*   NOTE: Aces in card games are sometimes special in that the value 
*   can be 1 or 11 (e.g. blackjack). That has to be handled at the 
*   application level.
*/

const suits = [
    'SPADES',
    'HEARTS',
    'DIAMONDS',
    'CLUBS',
];

const cards = [
    ['Ace', 1],
    ['Two', 2],
    ['Three', 3],
    ['Four', 4],
    ['Five', 5],
    ['Six', 6],
    ['Seven', 7],
    ['Eight', 8],
    ['Nine', 9],
    ['Ten', 10],
    ['Jack', 10],
    ['Queen', 10],
    ['King', 10],
];

let deck = {
    allCards: [],
    shuffle: () => {
        console.log('Shuffling....');
    },
};

deck.shuffle = () => {
    console.log
}

const createDeck = () => {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            deck.allCards.push([suits[i], cards[j][0], cards[j][1]]);
        }
    }

    return deck;
}

module.exports = {
    suits: suits,
    cardTypes: cards,
    createDeck: createDeck,
}