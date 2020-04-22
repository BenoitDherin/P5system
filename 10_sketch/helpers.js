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


function myTriangle(center, radius, direction) {
  if (direction) {
    beginShape()
      vertex(center + radius * cos(0), radius * sin(0))
      vertex(center + radius * cos(120), radius * sin(120))
      vertex(center + radius * cos(240), radius * sin(240))
    endShape(CLOSE)
  } else {
    beginShape()
      vertex(center + radius * cos(100), radius * sin(100))
      vertex(center + radius * cos(360), radius * sin(360))
      vertex(center + radius * cos(60), radius * sin(60))
    endShape(CLOSE)
  }
}

const layerConstructors = [
  {
    name: 'Outline Shape',
    init: () => OutlineShape(),
    weight: 0.3
  },
  {
    name: 'Outline Shape',
    init: () => OutlineShape(),
    weight: 0.3
  },
  {
    name: 'Outline Shape',
    init: () => OutlineShape(),
    weight: 0.3
  },
  {
    name: 'Centered Shape',
    init: () => CenteredShape(),
    weight: 0.3
  },
  {
    name: 'Circles',
    init: () => Circles(),
    weight: 0.3
  },
  {
    name: 'Simple Lines',
    init: () => SimpleLines(),
    weight: 0.3
  },
  {
    name: 'Dotted Lines',
    init: () => DottedLines(),
    weight: 0.3
  },
  {
    name: 'Ring of Shapes',
    init: () => RingOfShape(),
    weight: 0.3
  },
  {
    name: 'Test Lines',
    init: () => TestLines(),
    weight: 1
  },]
