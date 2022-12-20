// Using class Grid from './grid.ts'

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    Grid.drawGrid(40, 40);
    noStroke();
    fill('red');
    ellipse(0, 0, 0.2, 0.2);
}