var start = 0

function setup() {
    createCanvas(400, 400);
	pixelDensity(1)
}

/*Perlin 1D */
function draw() {
    background(51)
	stroke(255);
	noFill();
	beginShape();
	var xoff = start
	for (var x = 0; x < width; x++){
		stroke(255);
		var y = map(noise(xoff), 0, 1, 0, width);
		vertex(x, y);
		xoff += 0.02
	}
	endShape();
	start += 0.02
	noLoop()
}

// function draw() {
//     background(51)
// 	stroke(255);
// 	noFill();
// 	beginShape();
// 	var yoff = start
// 	for (var y = 0; y < height; y++){
// 		stroke(255);
// 		var x = map(noise(yoff), 0, 1, 0, width);
// 		vertex(x, y);
// 		yoff += 0.02
// 	}
// 	endShape();
// 	start += 0.02
// 	noLoop()
// }

/*Perlin 2D */
// function draw() {
// 	var yoff = 0;
// 	loadPixels();
// 	for(y = 0; y < height; y++) {
// 		var xoff = 0; // for every row reset xoff
// 		for(x = 0; x < width; x++) {
// 			var index = (x + y * width) * 4 
// 			var r = noise(xoff, yoff) * 255
// 			pixels[index + 0] = r //r
// 			pixels[index+1] = r //g
// 			pixels[index+2] = r //b
// 			pixels[index+3] = 255  //a
// 			xoff += 0.01
// 		}
// 		yoff += 0.01
// 	}
// 	updatePixels()
// 	noLoop()
// }
