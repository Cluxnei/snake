import {unity} from "./constants.js";

export default class Snake {
    constructor() {
        this.snake = [
            {
                x: 3 * unity,
                y: 5 * unity
            },
            {
                x: 2 * unity,
                y: 5 * unity
            },
            {
                x: unity,
                y: 5 * unity
            },
        ];
        this.color = {
            head: 'yellow',
            body: 'green'
        };
    }
    draw(ctx) {
        this.snake.forEach(({x, y}, index) => {
            ctx.fillStyle = index === 0 ? this.color.head : this.color.body;
            ctx.fillRect(x, y, unity, unity);
        });
    }
    update() {
        const newHead = {
            x: this.snake[0].x + unity,
            y: this.snake[0].y
        };
        this.snake.pop();
        this.snake.unshift(newHead);
    }
}
