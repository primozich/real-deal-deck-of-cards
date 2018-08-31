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

class Card {
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
    }

    isSameAs(cardToCheck) {
        return (this.suit === cardToCheck.suit) 
            && (this.name === cardToCheck.name) 
            && (this.value === cardToCheck.value);
    }
}

class Deck {
    constructor() {
        this.allCards = [];
        this.cardIndex = 0;

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < cards.length; j++) {
                this.allCards.push(new Card(suits[i], cards[j][0], cards[j][1]));
            }
        }
    }

    shuffle() {
        this.cardIndex = 0;

        let currentIndex = this.allCards.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = this.allCards[currentIndex];
            this.allCards[currentIndex] = this.allCards[randomIndex];
            this.allCards[randomIndex] = temporaryValue;
        }

        return this.allCards;
    }

    nextCard() {
        if (this.cardIndex >= this.allCards.length) {
            return false;
        }

        let card = this.allCards[this.cardIndex];
        this.cardIndex++;
        return card;
    }
}

let createDeck = () => {
    let deck = new Deck();

    return deck;
}

module.exports = {
    suits: suits,
    cardTypes: cards,
    createDeck: createDeck,
}