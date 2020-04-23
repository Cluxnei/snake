import {directions} from "./Constants.js";
import {unity} from "./Constants.js";

export default class Direction {
    constructor() {
        this.way = 'right';
    }
    reset() {
        this.way = 'right';
    }
    collidingDirections(newDirection) {
        return {
            left: 'right',
            right: 'left',
            down: 'up',
            up: 'down'
        }[this.way] === newDirection;
    }
    turnWay(direction) {
        this.way = direction;
    }
    getHeadFromDirection(headX, headY) {
        return {
            'right': () => ({
                x: headX + unity,
                y: headY
            }),
            'left': () => ({
                x: headX - unity,
                y: headY
            }),
            'up': () => ({
                x: headX,
                y: headY - unity
            }),
            'down': () => ({
                x: headX,
                y: headY + unity
            })
        }[this.way]();
    }
    listenKeyboard() {
        document.addEventListener('keydown', ({keyCode}) => {
            if (keyCode in directions) {
                const newDirection = directions[keyCode];
                if (!this.collidingDirections(newDirection)) {
                    this.turnWay(newDirection);
                }
            }
        });
    }
}
