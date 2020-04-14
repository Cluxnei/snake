export const rand = (min = 1, max) => {
    return Math.floor(Math.random() * max + min);
};
export const deg2Rad = (degrees) => degrees * (Math.PI / 180);
