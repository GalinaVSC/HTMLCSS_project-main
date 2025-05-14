class CirclePainter {
    paint(ctx, size) {
        const cols = 5; //Number of circels per row
        const rows = 5; //Number of circles per column
        const circleSize = size.width / cols; //Dynamically adjust size

        ctx.fillStyle = 'purple';

        for (let x = 0; x < size.width; x += circleSize) {
            for (let y = 0; y < size.height; y += circleSize) {
                ctx.beginPath();
                ctx.arc(x + circleSize / 2, y + circleSize / 2, circleSize / 2, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    }
}

registerPaint("circle-pattern", CirclePainter);