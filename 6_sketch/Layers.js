class Layer {
  constructor(){
    this.sides = SIDES
    this.numShapes = this.sides
    this.angle = 360 / this.numShapes
    this.stepsOut = 8
    this.singleStep = (CRYSTAL_SIZE / 2) / this.stepOut
    this.thinStroke = 1
    this.thickStroke = 3
    this.strokeColor = randomFromPalette()
  }
}

class Circles extends Layer {
  constructor() {
    super()
    console.log(this.sides)
    this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93
    this.position = (CRYSTAL_SIZE / 2) - this.shapeSize / 2

  }

  render() {
    noFill()
    stroke(this.strokeColor)
    strokeWeight(this.thinStroke)
    push()
      translate(width/2, height/2)
      for (let i = 0; i <= this.numShapes; i++) {
        ellipse(this.position, 0, this.shapeSize, this.shapeSize)
        rotate(this.angle)
      }
    pop()

  }
}
