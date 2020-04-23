import {unity} from "./Constants.js";

export const width = window.innerWidth;
export const height = window.innerHeight;
export const maxUnityX = Math.floor((width - unity) / unity);
export const maxUnityY = Math.floor((height - unity) / unity);
export const halfWidth = width / 2;
export const halfHeight = height / 2;
