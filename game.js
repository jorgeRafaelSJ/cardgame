/*=====================================================================
Game class

Created by Jorge Suárez on 3/13/17
=====================================================================*/ 

const Deck = require('./deck.js');
const Player = require('./player.js');

module.exports = class Game {
	constructor(gameData) {
		this.game_id = gameData.game_id || createID();
		this.game_type = gameData.game_type;
		this.winner = gameData || null;
		this.players = gameData.players || [];
		this.deck = gameData.deck || new Deck();
		this.turn = gameData.turn || 0 //index of player in players array 
		this.money_on_table = gameData.money_on_table || 0;
		this.max_bet = gameData.max_bet || null;
		this.min_bet = gameData.min_bet || null;
		this.buy_in_cost = gameData.buy_in_cost || 0;
	}

	/**
	* @function start
	* @public
	*/
	start(){
		this.deck.build();
		this.deck.shuffle();
		//do anything else needed to initialize game
	}

	/**
	* @function addPlayer
	* @protected
	*/
	addPlayer(p){
		this.players.push(new Player(p));
	}

	/**
	* @function removePlayer
	* @protected
	*/
	removePlayer(playerToRemove){
		this.players.forEach((player, index) => {
			if(player.player_id == playerToRemove.player_id) {
				this.players.splice(index, 1);
			}
		});
	}

	/**
	* @function passTurn
	* @protected
	*/
	passTurn() {
		//records the index of the player in turn in the array
		if(this.turn == this.players.length - 1) {
			this.turn = 0;
		} else {
			this.turn ++;
		}
	}

	/**
	* @function buyIn
	* @protected
	*/
	buyIn(player) {
		//take money from player.money_in_hand and at it to this.money_on_table.
	}

	/**
	* @function buyIn
	* @protected
	*/
	bet(player, amount) {
		//take money from player.money_in_hand and at it to this.money_on_table.
	}
}