class Grid {
    public static drawGrid(sizeX: number, sizeY: number): void {
        this.prepareGrid();
        for(let i = 0; i < sizeX; ++i) {
            line(i, 0, i, sizeY);
        }
        for(let i = 0; i < sizeY; ++i) {
            line(0, i, sizeX, i);
        }
    }
    private static prepareGrid(): void {
        scale(50);
        translate(1, 1);
        stroke('#ffffff');
        strokeWeight(0.1);
    }
}