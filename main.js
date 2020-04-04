import {setUpBackground, drawBackground} from "./background.js";
import {difficulty} from "./constants.js";
import loop from "./loop.js";
import Food from "./food.js";
import Snake from "./snake.js";

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

setUpBackground(canvas);

drawBackground(ctx);

const food = new Food(5, 10);
const snake = new Snake();

const gameInterval = setInterval(() => {
    drawBackground(ctx);
    return loop(ctx, snake, food);
}, difficulty * 100);
