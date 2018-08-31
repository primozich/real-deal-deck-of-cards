# real-deal-deck-of-cards

> A deck of cards.

Shuffle up and deal. This package is an object oriented approach to creating a deck of cards (no jokers) that can be used in any card game.

Includes unit tests via mocha.

## Usage

```javascript
var realDealDeckOfCards = require('real-deal-deck-of-cards')

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
```

outputs

```
Suit:  SPADES , Name:  Ace , Value:  1
Suit:  DIAMONDS , Name:  Two , Value:  2
Done - 52 cards!
```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install real-deal-deck-of-cards
```

## License

ISC
