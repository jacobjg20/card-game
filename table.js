//Instantiates and starts a deck
var Deck = require('./deck')
var deck = new Deck();

class Table{
    constructor(){
        this.communityCards = [];
        this.round = 1;
        this.turnCount = 0;
        this.isCheck = false;
        this.deck = deck.getCards();
    }

    check(){
        if (this.round == 1){
            this.communityCards.push(this.deck[0]);
            this.communityCards.push(this.deck[1]);
            this.communityCards.push(this.deck[2]);
            this.round++;
        } else if (this.round == 2){
            this.communityCards.push(this.deck[3]);
            this.round++;
        } else if (this.round == 3){
            this.communityCards.push(this.deck[4]);
            this.round++;
        }
        return this.communityCards;
    }
 
    randomize(a, b) {
        return Math.random() - 0.5;
    }

    //shuffles cards and resets the variables for the game
    shuffleCards(){
        this.round = 1;
        this.communityCards =[];
        this.deck.sort(this.randomize);
    }
}

module.exports = Table;