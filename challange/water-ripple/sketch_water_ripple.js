let bg_color = 220

const NUM_COLS = 400
const NUM_ROWS = 400

let buffer2d_1 = Array(NUM_ROWS).fill(Array(NUM_COLS).fill(0))
let buffer2d_2 = Array(NUM_ROWS).fill(Array(NUM_COLS).fill(0))

const MAX_COLOR_INTENSITY = 1
const THRESHOLD_VALUE = 0.001

let current_buffer = buffer2d_1
let previous_buffer = buffer2d_2

let damping = 0.9

function updateBufferAt(x,y){
  previous_buffer[x][y] = (
    current_buffer[x-1][y]+
    current_buffer[x+1][y]+
    current_buffer[x][y-1]+
    current_buffer[x][y+1]) / 2 - previous_buffer[x][y]
  previous_buffer[x][y] *= damping
  if (previous_buffer[x][y] <= THRESHOLD_VALUE){
    previous_buffer[x][y] = 0
  }
}

function swapCurrentBuffer(){
  temp = current_buffer
  current_buffer = previous_buffer
  previous_buffer = temp
}

function isCurrentBufferEmpty(){
  empty = true
  for (let i=0; i<NUM_ROWS; i++){
    for (let j=0; j<NUM_COLS; j++){
      if (current_buffer[i][j] > THRESHOLD_VALUE){
        empty = false
        break
      }
    }
    if (empty==false){
      break
    }
  }
  return empty
}

function fillMaxAt(x,y){
  current_buffer[x][y] = MAX_COLOR_INTENSITY
}

function show(){
  for (let i=0; i<NUM_ROWS; i++){
    for (let j=0; j<NUM_COLS; j++){
      const color_intensity = 1-current_buffer[i][j]
      const color = 255*color_intensity/MAX_COLOR_INTENSITY
      console.log(color_intensity, color);
      stroke(color)
      point(i, j)
    }
  }

      
}


function setup() {
  createCanvas(NUM_COLS, NUM_ROWS);
  background(bg_color)
}

function draw() {
  for (let i = 1; i<NUM_ROWS-1; i++){
    for (let j = 1; j<NUM_COLS-1; j++){
      updateBufferAt(i,j)
    }
  }
  
  if (mouseIsPressed){
    fillMaxAt(mouseX, mouseY)
  }
  if (isCurrentBufferEmpty()==false){
    show()
    swapCurrentBuffer()
  }
  
  // swap
}