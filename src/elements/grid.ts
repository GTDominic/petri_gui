class Grid {
    public static drawGrid(sizeX: number, sizeY: number): void {
        push();
        this.prepareGrid();
        for(let i = 0; i < sizeX; ++i) {
            line(i, 0, i, sizeY);
        }
        for(let i = 0; i < sizeY; ++i) {
            line(0, i, sizeX, i);
        }
        pop();
    }
    private static prepareGrid(): void {
        scale(Grid_Scale);
        translate(1, 3);
        stroke(Grid_StrokeColor);
        strokeWeight(Grid_StrokeWeight);
    }
}