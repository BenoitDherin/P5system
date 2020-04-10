const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []

const layers = []

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

  let picker = random(1) 

  if (picker > 0.3) { 
    layers.push(new OutlineShape())
  } 

  picker = random(1)
  if (picker > 0.3) {
    layers.push(new SimpleLines())
  } 

  picker = random(1)
  if (picker > 0.3) {
    layers.push(new Circles())
  }
  
  picker = random(1)
  if (picker > 0.3) {
    layers.push(new DottedLines())
  }
  
  picker = random(1)
  if (picker > 0.3) {
    layers.push(new CenteredShape())
  }
 
  picker = random(1)
  if (picker > 0.3) {
    layers.push(new RingOfShapes())
  }

  picker = random(1)
  if (picker > 0.3) {
    layers.push(new SteppedHexagons())
  }
 
  layers.forEach(layer => layer.render())

}
