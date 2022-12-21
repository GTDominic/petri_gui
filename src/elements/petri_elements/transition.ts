class Transition extends PetriElement {
    constructor(x: number, y: number, scale?: number) {
        if(typeof scale === 'undefined') scale = 1;
        super(x, y, scale);
    }

    drawElement(): void {
        rectMode(CENTER);
        rect(this.x, this.y, 0.6 * this.scale);
    }
}