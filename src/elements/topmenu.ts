class TopMenu {
    public static drawTopMenu() {
        push();
        fill('#aaaaaa');
        rect(0, 0, width, 60);
        for(let i = 0; i < topMenuButtons.length; i++) {
            this.drawMenuButton(i);
        }
        pop();
    }

    private static drawMenuButton(i: number): void {
        topMenuButtons[i].x = i * 120 + 70;
        fill('#ff0000');
        noStroke();
        rect(topMenuButtons[i].x, 10, 100, 40);
        textAlign(CENTER);
        textSize(20);
        fill('#00ff00');
        text(topMenuButtons[i].name, i * 120 + 120, 37.5);
    }

    public static mouseEvent(): void {
        if(mouseY < 10 || mouseY > 50) return;
        for(let button of topMenuButtons) {
            if(mouseX < button.x || mouseX > button.x + 100) continue;
            button.func();
            break;
        }
    }

    public static temp() {console.log('temp called!')};
}

interface TopMenuButton {
    name: string,
    x: number,
    func: () => void,
}

let topMenuButtons: Array<TopMenuButton> = [{
    name: 'Zoom +',
    x: null,
    func: () => TopMenu.temp()
}, {
    name: 'Zoom -',
    x: null,
    func: () => TopMenu.temp()
}, {
    name: 'X +',
    x: null,
    func: () => TopMenu.temp()
}, {
    name: 'X -',
    x: null,
    func: () => TopMenu.temp()
}, {
    name: 'Y +',
    x: null,
    func: () => TopMenu.temp()
}, {
    name: 'Y -',
    x: null,
    func: () => TopMenu.temp()
}];