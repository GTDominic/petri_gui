abstract class PetriElement {
    protected x: number;
    protected y: number;
    protected marked: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.marked = false;
    }

    abstract drawElement(): void;

    public mark(enable: boolean): void {
        this.marked = enable;
    };

    public draw(): void {
        push();
        strokeWeight(0.03);
        stroke('#ffffff');
        this.marked ? fill('#00aa00') : fill('#aaaaaa');
        this.drawElement();
        pop();
    }
}