# Card Game

* As I am not familiar with Java I modeled the challenge with JavaScript class syntax. 
* I thought best to create a parent Game class with subclasses for every specific game and rules
* Some assumptions I made:
    * All games would include betting.
    * Decks and cards did not need to be stored so they have no _id. Decks are stored in the game as an array anyways.
    * There will be some sort controller to handle some more game logic via http or another protocol. 
    * createID() is just a placeholder for any id generator SQL or NO_SQL.