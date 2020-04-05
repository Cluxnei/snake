const loop = (ctx, snake, food) => {
    snake.draw(ctx);
    snake.update();
};
export default loop;
