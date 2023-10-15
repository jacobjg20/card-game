class Card {
  constructor(suit, value){
      this.suit = suit;
      this.value = value;
  }
}

class Deck {
    constructor() {

      this.cards = [];
      for (let i = 1; i < 53; i++){
        let card = new Card('heart', i);
        this.cards.push(card);
        console.log(card)
      }
    }
 }

 module.exports = Deck;