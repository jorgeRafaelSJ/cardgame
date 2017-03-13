/*=====================================================================
BlackJackGame class

Created by Jorge Suárez on 3/13/17
=====================================================================*/

const Game = require('./game.js');

module.exports = class BlackJackGame extends Game {
	constructor(gameData) {
		//super() gives model Game attributes
		super();
	}

	//Black Jack Logic 

	/**
	* @function hit
	* @private
	*/
	hit(player){
		// deals card to player
		// removes card from deck
		//if a player's hand exceeds 21 
		//remove player from game.players array in Game class
		this.checkWinner();
	}

	/**
	* @function checkWinner
	* @private
	*/
	checkWinner() {
		if(this.players.length == 1) {
			this.winner == this.players[0];
		} else {
			this.passTurn();
		}
	}
}