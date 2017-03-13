/*=====================================================================
PokerGame class

Created by Jorge Suárez on 3/13/17
=====================================================================*/

const Game = require('./game.js');

module.exports = class PokerGame extends Game {
	constructor(gameData) {
		//super() gives model Game attributes
		super();
	}

	//Poker Logic goes here

	/**
	* @function checkWinner
	* @private
	*/
	checkWinner() {
		//COMPARES STANDING PLAYERS HANDS and sets the winner
	}

	/**
	* @function initialDeal
	* @private
	*/
	initialDeal() {
		//give players their first three cards
	}

	/**
	* @function initialDeal
	* @private
	*/
	raiseBet(player, amount) {
		//uses the Game.bet() but also handles logic to 
		//make other players bet the raise or fold
	}

	/**
	* @function fold
	* @private
		
		not necessary unless there are other needs that 
		make folding and removing differ 
		but its nice to have it with the correct naming
	*/
	fold(player) {
		//remove player from game 
		this.removePlayer(player);
	}
}