let assert = require('assert');
let rdDoC = require('../index');

describe('cards', function() {
    describe('#suits', function() {
        it('there should be 4 suits', function() {
            assert(rdDoC.suits.length, 4);
        })
    })

    describe('#cards', function() {
        it('there should be 13 types of cards', function() {
            assert(rdDoC.cardTypes.length, 13);
        })
    })
})

describe('deck', function() {
    describe('#createDeck()', function() {
        let deck = rdDoC.createDeck();

        it('shuffle should randomize the cards', function() {
            let decksAreDifferent = false;
            let originalDeck = deck.allCards.slice(0);
            deck.shuffle();
            let newDeck = deck.allCards;
            for (let i = 1; i < originalDeck.length; i++) {
                let aCard = originalDeck[i];
                let bCard = newDeck[i];
                if ((aCard[0] !== bCard[0]) || (aCard[2] !== bCard[2])) {
                    decksAreDifferent = true;
                }
            }
            assert.equal(decksAreDifferent, true);
        });

        it('should return 52 cards', function() {
            assert.equal(deck.allCards.length, 52);
        });

        it('should have 13 spades', function() {
            let spades = [];
            for (let i = 0; i < deck.allCards.length; i++) {
                let card = deck.allCards[i];
                if (card[0] === rdDoC.suits[0]) {
                    spades.push(card);
                }
            }
            assert.equal(spades.length, rdDoC.cardTypes.length);
        });
        it('should have 13 hearts', function() {
            let hearts = [];
            for (let i = 0; i < deck.allCards.length; i++) {
                let card = deck.allCards[i];
                if (card[0] === rdDoC.suits[1]) {
                    hearts.push(card);
                }
            }
            assert.equal(hearts.length, rdDoC.cardTypes.length);
        });
        it('should have 13 diamonds', function() {
            let diamonds = [];
            for (let i = 0; i < deck.allCards.length; i++) {
                let card = deck.allCards[i];
                if (card[0] === rdDoC.suits[2]) {
                    diamonds.push(card);
                }
            }
            assert.equal(diamonds.length, rdDoC.cardTypes.length);
        });
        it('should have 13 clubs', function() {
            let clubs = [];
            for (let i = 0; i < deck.allCards.length; i++) {
                let card = deck.allCards[i];
                if (card[0] === rdDoC.suits[3]) {
                    clubs.push(card);
                }
            }
            assert.equal(clubs.length, rdDoC.cardTypes.length);
        });
    });
});