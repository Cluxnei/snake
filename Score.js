import {unity} from "./Constants.js";

export default class Score {
    constructor() {
        this.points = 0;
        this.color = '#fff';
        this.storageKey = 'snake-storage';
        this.recover();
        this.position = {
          x: 5 * unity,
          y: 2 * unity
        };
    }
    add() {
        this.points++;
    }
    save() {
        localStorage.setItem(this.storageKey, this.points.toString());
    }
    recover() {
        const record = localStorage.getItem(this.storageKey);
        this.points = record || 0;
    }
    draw(ctx) {
        const {x, y} = this.position;
        ctx.fillStyle = this.color;
        ctx.fillText(this.points.toString(), x, y);
    }
}
