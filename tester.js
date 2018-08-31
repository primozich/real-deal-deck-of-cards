'use strict';

let realDealDeckOfCards = require('./index');

let deck = realDealDeckOfCards.createDeck();
let next = deck.nextCard();
console.log('Suit: ', next.suit, ', Name: ', next.name, ', Value: ', next.value);

deck.shuffle();
next = deck.nextCard();
let count = 1;
console.log('Suit: ', next.suit, ', Name: ', next.name, ', Value: ', next.value);

while (next = deck.nextCard()) {
    count++;
}
console.log('Done - '+count+' cards!');