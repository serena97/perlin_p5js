var scl = 20;
var cols, rows;
var inc = 0.1;
var fr;
var zoff = 0
var particles = []
var flowField;

let colors;

class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

function setup() {
    createCanvas(400, 400);
	cols = floor(width / scl);
    rows = floor(height / scl);
    fr = createP()
    flowField = new Array(cols * rows)
    for(var i = 0; i < 400; i++) {
        particles[i] = new Particle()
    }
    background(255)
    const red = new Color(255, 0, 0)
    const orange = new Color(255, 165, 0, 5)
    const yellow = new Color(255, 255, 0, 5)
    const green = new Color(0, 255, 0, 5)
    const blue = new Color(0, 0, 255, 5)
    const indigo = new Color(75, 0, 130, 5)
    const violet = new Color(148, 0, 211,5)
    colors = [red, orange, yellow, green, blue, indigo, violet]
}

function getColor(i) {
    const index = floor(map(i, 0, particles.length, 0, colors.length))
    return colors[index]
}

function draw() {
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            var index = (x + y * cols);
            var angle = noise(xoff, yoff, zoff) * TWO_PI;
            var v = p5.Vector.fromAngle(angle)
            v.setMag(1);
            flowField[index] = v
            xoff += inc;
        }
        yoff += inc;

        zoff += 0.0003;
    }
    for (let i = 0; i < particles.length; i ++) {
        particles[i].follow(flowField)
        particles[i].update();
        particles[i].edges();
        particles[i].show(getColor(i));
    }

    if(zoff > 10) {
        noLoop()
    }

    fr.html(floor(frameRate()))
}