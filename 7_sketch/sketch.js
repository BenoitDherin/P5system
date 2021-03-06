const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []


function setup() {
  createCanvas(530, 530, SVG)
  
  PALETTE = [
    color(255, 52, 154), //pink
    color(4, 0, 152)
  ]
  noLoop()
  angleMode(DEGREES)
  // Put the center of the rectangle at the orgin and not the left upper corner
  rectMode(CENTER)
}

function draw() {
  const circles = new Circles()
  circles.render()

  const simpleLines = new SimpleLines()
  simpleLines.render()

  const outlineShape = new OutlineShape()
  outlineShape.render()

  testLines()
}
