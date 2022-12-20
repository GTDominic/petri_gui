function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    TopMenu.drawTopMenu();
    Grid.drawGrid(40, 40);
}

function mouseClicked() {
    MouseHelper.handleClick();
}