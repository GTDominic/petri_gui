class TopMenu {
    public static drawTopMenu() {
        push();
        fill('#aaaaaa');
        rect(0, 0, width, 60);
        for(let i = 0; i < TopMenu_Buttons.length; i++) {
            this.drawMenuButton(i);
        }
        pop();
    }

    private static drawMenuButton(i: number): void {
        TopMenu_Buttons[i].x = i * 120 + 70;
        fill('#ff0000');
        noStroke();
        rect(TopMenu_Buttons[i].x, 10, 100, 40);
        textAlign(CENTER);
        textSize(20);
        fill('#00ff00');
        text(TopMenu_Buttons[i].name, i * 120 + 120, 37.5);
    }

    public static mouseEvent(): void {
        if(mouseY < 10 || mouseY > 50) return;
        for(let button of TopMenu_Buttons) {
            if(mouseX < button.x || mouseX > button.x + 100) continue;
            button.func();
            break;
        }
    }

    public static zoom(plus: boolean) {
        plus ? Grid_Scale += 10 : Grid_Scale -= 10;
    }

    public static moveX(positiv: boolean) {
        positiv ? Grid_Xdif -= 1 : Grid_Xdif += 1;
    }

    public static moveY(positiv: boolean) {
        positiv ? Grid_Ydif -= 1 : Grid_Ydif += 1;
    }

    public static temp() {console.log('temp called!')}
}
