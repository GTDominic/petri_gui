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
        fill('#ff0000');
        noStroke();
        rect(i * 120 + 70, 10, 100, 40);
    }

    public static temp() {};
}

let topMenuButtons: Array<{
    name: string,
    x: number,
    y: number,
    func: () => void,
}> = [{
    name: 'Zoom +',
    x: null,
    y: null,
    func: () => TopMenu.temp()
}, {
    name: 'Zoom -',
    x: null,
    y: null,
    func: () => TopMenu.temp()
}, {
    name: 'X +',
    x: null,
    y: null,
    func: () => TopMenu.temp()
}, {
    name: 'X -',
    x: null,
    y: null,
    func: () => TopMenu.temp()
}, {
    name: 'Y +',
    x: null,
    y: null,
    func: () => TopMenu.temp()
}, {
    name: 'Y -',
    x: null,
    y: null,
    func: () => TopMenu.temp()
}];