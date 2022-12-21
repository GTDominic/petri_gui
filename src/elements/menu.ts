class Menu {
    public static drawMenu() {
        push();
        noStroke();
        fill('#506ada');
        rect(0, 60, 160, height - 60);
        for(let element of Menu_Elements) element.element.draw();
        pop();
    }

    public static temp(): void {
        console.log('Called Menu.temp()!');
    }
}