class Place extends PetriElement {
    constructor(x: number, y: number) {
        super(x, y);
    }

    drawElement() {
        ellipse(this.x, this.y, 0.6);
    }
}