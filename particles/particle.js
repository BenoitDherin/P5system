function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = randomVector(100); 
  this.acc = createVector(0, 0);
  this.mass = m;
  this.red =  randomInt(255);
  this.blue =  randomInt(255);
  this.green =  randomInt(255);

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    v = constrain(this.vel.mag(), 0, 70);
    this.vel.setMag(v);
    
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(this.red, this.green, this.blue)
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }

    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }

  }

  this.computeAttraction = function(particle){
    var m = this.mass;
    var M = particle.mass;
    var f = p5.Vector.sub(this.pos, particle.pos);
    d = f.mag();
    var intensity = (m * M) / d*d;
    if (d < 100 ){
      intensity = -intensity;
    }
    f.setMag(intensity);
    return f ;
  }
}


