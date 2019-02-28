var bubbles = [];
var canvas;
var slider;
var jitterSlider;
var sizeFlucSlider;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
		canvas.position(0,0);
		canvas.style('z-index', '-1');
    slider = createSlider(0,500,30,1);
    slider.position(-100,-100);
    jitterSlider = createSlider(0,5,1,.01);
    jitterSlider.position(-100,-100);
    sizeFlucSlider = createSlider(0,5,1,.01);
    sizeFlucSlider.position(-100,-100);
    for (var i = 0; i < slider.value(); i++) {
        bubbles[i] = new Bubble(random(width),random(height),random(10,30));
    }
}

function draw() {
    background(14,143,230);
    fill(255,255,255,40);
    for (i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].display();
    }
    if (slider.value() < bubbles.length) {
        bubbles.splice(0,1);
    } else if (slider.value() > bubbles.length) {
        bubbles.push(new Bubble(random(width),random(height),random(10,30)));
    }
}

function mouseDragged() {
    if (mouseX < windowWidth) {
        if (mouseY < windowHeight - 40) {
            bubbles.push(new Bubble(mouseX, mouseY, random(10,30)));
        }
    }
}

function Bubble(x,y,d) {
    this.x = x;
    this.y = y;
    this.d = d;

    this.move = function() {
        this.x = this.x + random(-jitterSlider.value(),jitterSlider.value());
        this.y = this.y + random(-jitterSlider.value(),jitterSlider.value());
        if (this.d > 10) {
            this.d = this.d + random(-sizeFlucSlider.value(),sizeFlucSlider.value());
        } else {
            this.d = this.d + 1
        }
    }

    this.display = function() {
        stroke(255);
        fill(255,255,255,40);
        ellipse(this.x,this.y,this.d,this.d);
    }
}
