var fft;
var windowStroke;
var mic;

function setup() {
  createCanvas(500,500);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  windowStroke = (500 / 300);
}

function draw() {
  background(0);
  var spec = fft.analyze();
  beginShape();
  for( var i = 0; i < spec.length; i++) {
    strokeWeight(windowStroke * 5);
    if(i < 50){
      stroke(197, 108, 240);
    }
    else if(i < 100) {
      stroke(113, 88, 266)
    }
    else if(i < 150) {
      stroke(23, 192, 235)
    }
    else if(i < 200) {
      stroke(50, 255, 126)
    }
    else if(i < 250) {
      stroke(255, 159, 26)
    }
    else {
      stroke(255, 56, 56)
    }

    point(i*windowStroke, map(spec[i], 0, 300, 500/2, 0));
  }
  endShape();
  fill(1);
}
