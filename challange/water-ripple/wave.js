class Wave{
  constructor(x, y, intensity=0.8, dampening = 0.9, max_size = 300){
    this.source = createVector(x,y)
    this.intensity = intensity
    this.dampening = dampening
    this.minimum_intensity = 0.01
    this.max_size = max_size
    this.delta_size = (1-intensity)*max_size
  }

  show(){
    stroke(`rgba(0,0,0,${this.intensity*this.dampening})`)
    strokeWeight(this.intensity*2)
    noFill()
    circle(this.source.x, this.source.y, (1-this.intensity)*this.max_size-this.delta_size)
  }

  spread(){
    this.intensity *= this.dampening
    console.log("Intensity =",this.intensity <= this.minimum_intentsity)
    if (this.intensity <= this.minimum_intensity){
      this.intensity = 0
    }
  }
}