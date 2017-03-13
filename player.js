/*=====================================================================
Player class

Created by Jorge Suárez on 3/13/17
=====================================================================*/ 

module.exports = class Player {
	constructor(playerData) {
		this.player_id = playerData.player_id || createID();
		this.player_type = playerData.player_type; //differentiates the dealer
		this.name = playerData.name;
		this.hand = playerData.hand || [];
		this.money_in_hand = playerData.money_in_hand; 
	}
}