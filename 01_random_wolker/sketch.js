var w;

function setup() {
  createCanvas(3 * 640, 3 * 360);
  background(randomInt(255), randomInt(255), randomInt(255));
  w = new Walker();
}

function draw() {
  w.update();
  w.display();
}

function Walker() {
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0, 0)

  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);

    this.acc.setMag(0.05);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    fill(randomInt(255), randomInt(255), randomInt(255));
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}

function randomInt(max){
  return floor(random(max + 1));
}
