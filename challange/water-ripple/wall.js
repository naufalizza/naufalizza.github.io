class Wall{
  constructor(x1,y1,x2,y2, density = 0.9){
    this.points = [createVector(x1, y1), createVector(x2,y2)]
    this.density = density
  }
}