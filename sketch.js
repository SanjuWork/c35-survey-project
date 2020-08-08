var ball;
var gameState = 0;
var VoterCount;
var count;
var form, voter, game;
var database1,positions;
// var voter

function setup(){
    // createCanvas(500,500);
    noCanvas();
    
    // Creating the database
    database1 = firebase.database();

    game = new Game();
    game.gameState();
    game.start();
}

function draw(){
    background("white"); 
}