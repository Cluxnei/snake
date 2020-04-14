import Game from "./Game.js";

const canvas = document.getElementById('screen');
// const foodImage = document.getElementById('food');

const game = new Game(canvas);

// game.setFoodImage(foodImage);

game.boot();

game.start();
