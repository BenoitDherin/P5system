var particles = [];
var attractor;

function setup() {
  createCanvas(3 * 640, 3 * 360);
  background(0);
  attractor = new Particle(width/2, height/2,  10);
}

function mousePressed() {
  var p = new Particle(mouseX, mouseY, 1);
  particles.push(p);
  console.log(attractor);
  force = attractor.computeAttraction(p);
  console.log(force);
}

function keyPressed() {
  if (key == ' ') {
    particles.splice(0, 1);
  }

}

function draw() {
  var wind = createVector(0.1, 0);

  attractor.display();

  for (var i = 0; i < particles.length; i++) {
    var attraction = attractor.computeAttraction(particles[i]);
    particles[i].applyForce(attraction);

    if (mouseIsPressed) {
      particles[i].applyForce(wind);
    }

    particles[i].update();
    particles[i].edges();
    particles[i].display();
  }
}

