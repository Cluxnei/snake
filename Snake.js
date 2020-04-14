import {unity} from "./Constants.js";
import {width, height} from "./Dimentions.js";

export default class Snake {
    constructor() {
        this.snake = this.getInitialSnake();
        this.color = {
            head: 'yellow',
            body: 'green'
        };
        this.eated = false;
        this.alive = true;
    }
    getInitialSnake() {
        return [
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
    }
    draw(ctx) {
        this.snake.forEach(({x, y}, index) => {
            ctx.fillStyle = index === 0 ? this.color.head : this.color.body;
            ctx.fillRect(x, y, unity, unity);
        });
    }
    update(direction, food) {
        if (this.collideWithSelf()) {
            return this.die();
        }
        const newHead = this.computeNewHead(direction);
        if (this.collide()) {
            if (this.collideX()) {
                newHead.x = this.computeCollideX();
            }
            if (this.collideY()) {
                newHead.y = this.computeCollideY();
            }
        }
        if (this.eatFood(newHead, food)) {
            food.generate();
        } else {
            this.snake.pop();
        }
        this.snake.unshift(newHead);
    }
    computeNewHead(direction) {
        const {x, y} = this.snake[0];
        return direction.getHeadFromDirection(x, y);
    }
    eatFood({x: headX, y: headY}, {x: foodX, y: foodY}) {
        this.eated = foodX === headX && foodY === headY;
        return this.eated;
    }
    collide() {
        const {x, y} = this.snake[0];
        return x < unity || y < unity || x > width || y > height;
    }
    collideX() {
        const {x} = this.snake[0];
        return x < unity || x > width;
    }
    collideY() {
        const {y} = this.snake[0];
        return y < unity || y > height;
    }
    collideWithSelf() {
        const {x: headX, y: headY} = this.snake[0];
        for (const {x, y} of this.snake.slice(1)) {
            if (x === headX && y === headY) {
                return true;
            }
        }
        return false;
    }

    computeCollideX() {
        return this.snake[0].x < unity ? width : unity;
    }

    computeCollideY() {
        return this.snake[0].y < unity ? height : unity;
    }

    reborn() {
        this.alive = true;
        this.snake = this.getInitialSnake();
    }

    die() {
        this.alive = false;
    }
}
