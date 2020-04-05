import {rand} from "./Functions.js";
import {unity} from "./Constants.js";

export default class Food {
    constructor(x, y) {
        this.x = x * unity;
        this.y = y * unity;
        this.color = 'red';
        this.rangeX = [0, 100];
        this.rangeY = [0, 100];
    }
    generate() {
        this.x = rand(
            this.rangeX[0],
            this.rangeX[1]
        ) * unity;
        this.y = rand(
            this.rangeY[0],
            this.rangeY[1]
        ) * unity;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, unity, unity);
    }
};
