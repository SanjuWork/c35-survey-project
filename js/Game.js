// Creating a game class
class Game {

    // Creating an epty constructor
    constructor() {}

    gameState() {
        var gameStateref = database1.ref("GameState");
        gameStateref.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state) {
        database1.ref('/').update({gameState:state});
    }

    start() {
        if(gameState === 0) {
            voter = new Voter();
            voter.getCount();
            form = new Form();
            form.display();
        }
    }
    
}