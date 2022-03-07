let sound_waves = []

function setup(){
  createCanvas(400, 400)
  background(220)
  frameRate(15)
}

let num = 0.005
function draw(){
  num += 0.005
  background(220)
  if (mouseIsPressed){
    // stroke(`rgba(${0},${0},${0},${num})`)
    // noFill()
    // circle(mouseX, mouseY, 20)
    sound_waves.push(new Wave(mouseX, mouseY))
  }
  for (let i = 0; i<sound_waves.length; i++){
    if (sound_waves[i].intensity != 0){
      sound_waves[i].show()
      sound_waves[i].spread()
    } else {
      deleted_sound = sound_waves.pop(i)
      deleted_sound = null
    }
  }

}