import {height, width} from "./Dimentions.js";
import {screenColor} from "./Constants.js";

export const setUpBackground = (canvas) => {
    canvas.width = width;
    canvas.height = height;
};

export const drawBackground = (ctx) => {
    ctx.fillStyle = screenColor;
    ctx.fillRect(0, 0, width, height);
};
