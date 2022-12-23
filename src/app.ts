function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    Grid.drawGrid(40, 40);
    TopMenu.drawTopMenu();
    Menu.drawMenu();
    MoveHelper.drawElement();
}

function mouseClicked() {
    MouseHelper.handleClick();
}