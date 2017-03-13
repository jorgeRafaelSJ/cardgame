/*=====================================================================
Deck class

Created by Jorge Suárez on 3/13/17
=====================================================================*/ 

const Card = require('./card.js');

module.exports = class Deck {
	constructor(deckData) {
		this.cards = deckData.cards || [];
		this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
		this.ranks = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
	}

	/**
	* @function build
	* @public
	*/
	build() {
		this.suits.forEach((suit) => {
			this.ranks.forEach((rank) => {
				let newCard = new Card({suit: suit, rank: rank});
				this.cards.push(newCard);
			});
		})
	}

	/**
	* @function shuffle
	* @public
	*/
	shuffle(){
		//randomize order of deck after building it
	}
}