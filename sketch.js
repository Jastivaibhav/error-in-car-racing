var database;
var game,form,player;
var gameState;
var playerCount;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
   // game=new Game();
   // game.getState();
   // game.start();
  player=new Player();
  player.getCount();
  console.log(playerCount);
   
}

function draw(){

}

