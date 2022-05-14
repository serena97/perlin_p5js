var scl = 20;
var cols, rows;
var inc = 0.1;
var fr;
var zoff = 0
var particles = []
var flowField;

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
            // stroke(0, 50);
            // push()
            // translate(x * scl, y*scl)
            // rotate(v.heading())
            // strokeWeight(1)
            // line(0, 0, scl, 0)
            // pop()
            // fill(r)
            // rect(x * scl, y * scl, scl, scl)
        }
        yoff += inc;

        zoff += 0.0003;
    }
    for (let i = 0; i < particles.length; i ++) {
        particles[i].follow(flowField)
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }

    if(zoff > 15) {
        noLoop()
    }

    fr.html(floor(frameRate()))
}