function hexagon(posX, posY, radius) {
  const rotAngle = 360 / 6
  beginShape()
  for (let i=0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}


function pointOnCircle(posX, posY, radius, angle) {
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}

function randomSelectTwo() {
  return random(1) > 0.5 ? true: false
}

function randomFromPalette(){
  return PALETTE[floor(random(0, PALETTE.length))] 
}

function testLines() {
  //strokeWeight(3)

  const numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = randomFromPalette()
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
