class Transition extends PetriElement {
    constructor(x: number, y: number) {
        super(x, y);
    }

    drawElement(): void {
        rectMode(CENTER);
        rect(this.x, this.y, 0.6);
    }
}