function setup() {
  createCanvas(500, 500, SVG)
  noLoop()
  angleMode(DEGREES)
  // Put the center of the rectangle at the orgin and not the left upper corner
  rectMode(CENTER)
}

function draw() {
  background('teal')
  fill(0)
  push()
    translate(width/2, height/2)
    rotate(45)
    rect(0, 0, 25, 25)
  pop()
  fill('orange')
  rect(0, 0, 25, 25)
}
