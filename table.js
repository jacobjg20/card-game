//Instantiates and starts a deck
var Deck = require('./deck')
var deck = new Deck();

class Table{
    constructor(){
        this.communityCards;
        this.board;
        this.deck = deck.getCards();
    }

    getBoard(){
        return this.board;
    }

    shuffleCards(){
        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
}

module.exports = Table;