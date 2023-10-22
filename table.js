//Instantiates and starts a deck
var Deck = require('./deck')
var deck = new Deck();

class Table{
    constructor(){
        this.communityCards = [];
        this.turnCount = 0;
        this.isCheck = false;
        this.deck = deck.getCards();
    }

    //return ComminityCards as JSOn
    getCommunityCards(){
        this.communityCards.push(this.deck[0]);
        this.communityCards.push(this.deck[1]);
        this.communityCards.push(this.deck[2]);
        return this.communityCards;
    }
  
    check(){
     
    }
 
    shuffleCards(){
        // for (var i = Object.keys(this.deck).length - 1; i > 0; i--) {
        //     var j = Math.floor(Math.random() * (i + 1));
        //     var temp = this.deck[i];
        //     this.deck[i] = this.deck[j];
        //     this.deck[j] = temp;
        // }
    }
}

module.exports = Table;