class Menu {
    public static drawMenu() {
        push();
        noStroke();
        fill('#506ada');
        rect(0, 60, 160, height - 60);
        for(let element of Menu_Elements) element.element.draw();
        pop();
    }

    public static mouseEvent(): void {
        if(mouseX < 33 || mouseX > 127) return;
        for(let element of Menu_Elements) {
            if(mouseY > element.element.getPosition().y + 47 || mouseY < element.element.getPosition().y - 47) continue;
            element.func();
            break;
        }
    }

    public static temp(): void {
        console.log('Called Menu.temp()!');
    }
}