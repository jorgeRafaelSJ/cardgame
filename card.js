/*=====================================================================
Card class

Created by Jorge Suárez on 3/13/17
=====================================================================*/ 

module.exports = class Card {
	constructor(cardData) {
		this.suit = cardData.suit; //string
		this.rank = cardData.rank; //string could be "J,Q,K,A"
	}
}