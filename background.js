import {height, width} from "./dimentions.js";
import {screenColor} from "./constants.js";

export function setUpBackground(canvas) {
    canvas.width = width;
    canvas.height = height;
}

export function drawBackground (ctx) {
    ctx.fillStyle = screenColor;
    ctx.fillRect(0, 0, width, height);
}
