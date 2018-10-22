'use strict';

/*
*   Card = [Suit, Name, Value]
*
*   NOTE: Aces in card games are sometimes special in that the value 
*   can be 1 or 11 (e.g. blackjack) or hi/low (e.g poker). That has 
*   to be handled at the application level.
*/

const suits = [
    'SPADES',
    'HEARTS',
    'DIAMONDS',
    'CLUBS',
];

// Name, point value, poker value
const cards = [
    ['Ace', 1, 14],
    ['Two', 2, 2],
    ['Three', 3, 3],
    ['Four', 4, 4],
    ['Five', 5, 5],
    ['Six', 6, 6],
    ['Seven', 7, 7],
    ['Eight', 8, 8],
    ['Nine', 9, 9],
    ['Ten', 10, 10],
    ['Jack', 10, 11],
    ['Queen', 10, 12],
    ['King', 10, 13],
];

class Card {
    constructor(suit, name, value, pokerValue) {
        this.suit = suit;
        this.name = name;
        let cardTemplate = cards.filter(card => card[0] === name);
        if (cardTemplate.length === 1) {
            this.value = (value ? value : cardTemplate[0][1]);
            this.pokerValue = (pokerValue ? pokerValue : cardTemplate[0][2]);
        }
        else {
            throw "Needs to be a single  card type template: " + name;
        }
    }

    isSameAs(cardToCheck) {
        return (this.suit === cardToCheck.suit) 
            && (this.name === cardToCheck.name) 
            && (this.value === cardToCheck.value);
    }

    isSameSuit(cardToCheck) {
        return this.suit === cardToCheck.suit;
    }

    isSameName(cardToCheck) {
        return this.name === cardToCheck.name;
    }
}

class Deck {
    constructor(allCards = null) {
        this.cardIndex = 0;
        if (allCards) {
            this.allCards = allCards;
        }
        else {
            this.allCards = [];

            for (let i = 0; i < suits.length; i++) {
                for (let j = 0; j < cards.length; j++) {
                    this.allCards.push(new Card(suits[i], cards[j][0], cards[j][1], cards[j][2]));
                }
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
    Card: Card,
}