import {rand} from "./Functions.js";
import {unity} from "./Constants.js";
import {maxUnityX, maxUnityY} from "./Dimentions.js";

export default class Food {
    constructor() {
        this.x = unity;
        this.y = unity;
        this.rangeX = [0, maxUnityX];
        this.rangeY = [0, maxUnityY];
        this.generate();
        this.color = '#f00';
    }
    generate() {
        this.x = rand(this.rangeX[0], this.rangeX[1]) * unity;
        this.y = rand(this.rangeY[0], this.rangeY[1]) * unity;
    }
    draw(ctx, foodImage = undefined) {
        if (foodImage) {
            return ctx.drawImage(foodImage, this.x, this.y, unity, unity);
        }
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, unity, unity);
    }
};
