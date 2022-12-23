abstract class PetriElement {
    protected x: number;
    protected y: number;
    protected scale: number;
    protected marked: boolean;

    constructor(x: number, y: number, scale: number) {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.marked = false;
    }

    abstract drawElement(): void;

    public mark(enable: boolean): void {
        this.marked = enable;
    };

    public getPosition(): {x: number, y: number} {
        return {x: this.x, y: this.y};
    }

    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public draw(): void {
        push();
        strokeWeight(0.03 * this.scale);
        stroke('#ffffff');
        this.marked ? fill('#00aa00') : fill('#aaaaaa');
        this.drawElement();
        pop();
    }
}