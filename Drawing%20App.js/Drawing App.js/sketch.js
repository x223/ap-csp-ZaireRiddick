var strokeColor = 'black';

function keyTyped() {
	if (key === 'b') {
		strokeColor = 'black';
	} else if (key === 'p') {
		strokeColor = '#E32173';
		weight = 10;
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	if (mouseIsPressed) {
		stroke(strokeColor);
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
}

function keyTyped() {
}
	if (key === 'b') {
		strokeColor = 'black';
	} else if (key === 'p') {
		strokeColor = '#E32173';
		weight = 10;
	}
	else if (key ==='p') {
    strokeColor = 'red';
}