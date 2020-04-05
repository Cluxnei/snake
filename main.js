import {setUpBackground, drawBackground} from "./Background.js";
import {difficulty} from "./Constants.js";
import loop from "./Loop.js";
import Food from "./Food.js";
import Snake from "./Snake.js";

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
