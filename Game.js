import Food from "./Food.js";
import Snake from "./Snake.js";
import Score from './Score.js';
import Direction from './Direction.js';
import {drawBackground, setUpBackground} from "./Background.js";
import {delay, states} from "./Constants.js";
import {halfHeight, halfWidth} from "./Dimentions.js";

export default class Game {
    constructor(canvas, direction = new Direction, food = new Food, snake = new Snake, score = new Score) {
        this.state = states.play;
        this.direction = direction;
        this.food = food;
        this.snake = snake;
        this.score = score;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }
    boot() {
        setUpBackground(this.canvas);
        drawBackground(this.ctx);
        this.direction.listenKeyboard();
    }
    start() {
        if (this.state === states.gameOver) {
            this.snake.reborn();
            this.direction.reset();
            this.drawGameOver();
            return this.waitForEnterKey();
        } else if (this.state === states.play) {
            this.drawPressEnterKey();
            return this.waitForEnterKey();
        }
        drawBackground(this.ctx);
        this.loop();
        if (delay !== 0) {
            return setTimeout(() => requestAnimationFrame(() => this.start()), delay);
        }
        requestAnimationFrame(() => this.start());
    }
    loop() {
        this.snake.draw(this.ctx);
        this.snake.update(this.direction, this.food);
        if (!this.snake.alive) {
            this.score.save();
            return this.gameOver();
        } else if (this.snake.eated) {
            this.score.add();
        }
        this.score.draw(this.ctx);
        this.food.draw(this.ctx, this.foodImage);
    }
    setFoodImage(foodImage) {
        this.foodImage = foodImage;
    }
    gameOver() {
        this.state = states.gameOver;
    }
    drawPressEnterKey() {
        this.ctx.fillStyle = '#fff';
        this.ctx.font = '50px Verdana';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Press enter to start', halfWidth, halfHeight);
    }
    waitForEnterKey() {
        const listener = ({keyCode}) => {
            if (keyCode === 13) {
                this.state = states.playing;
                document.removeEventListener('keypress', listener, false);
                this.start();
            }
        };
        document.addEventListener('keypress', listener, false);
    }
    drawGameOver() {
        this.ctx.fillStyle = '#fff';
        this.ctx.font = '50px Verdana';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Game Over, press enter to reborn', halfWidth, halfHeight);
    }
}
