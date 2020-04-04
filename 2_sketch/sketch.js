const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []


function setup() {
  createCanvas(530, 530, SVG)
  
  PALETTE = [
    color(255, 52, 154), //pink
    color(4, 0, 152),
    'limegreen',
    'orange',
    'red',
    'brown',
    'burgundy',
    'teal'
  ]
  noLoop()
  angleMode(DEGREES)
  // Put the center of the rectangle at the orgin and not the left upper corner
  rectMode(CENTER)
}

function draw() {
  testLines()
}

function testLines() {

  const numShapes = randomSelectTwo() ? SIDES : SIDES * floor(random(0, 100))
  const strokeColor = getRandomFromPalette()
  console.log(strokeColor)

  noFill()
  push()
    translate(width/2, height/2)
    stroke(PALETTE[0])
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)

    stroke(strokeColor)
    const angle = 360 / numShapes

    for (let i = 0; i < numShapes; i++) {
      line(0, 0, 0, CRYSTAL_SIZE/2)
      rotate(angle)
    }
  pop()
}

function randomSelectTwo() {
  return random(1) > 0.5 ? true: false
}

function getRandomFromPalette(){
  return PALETTE[floor(random(0, PALETTE.length))] 
}
