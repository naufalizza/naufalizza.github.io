const board = new Board(16, 16, 30);
const s = new Square(0,0,5, board);
let dir = 'r';
const wall = {
    up: 0,
    left: 0,
    down: (board.row-1) * board.tileSize,
    right: (board.col-1) * board.tileSize
}
function setup(){
    createCanvas(board.col*board.tileSize, board.row*board.tileSize)
    background(0)
    noStroke();
}

function draw() {
    background(127);
    for (var i=0; i<board.col; i++){
        line((i+1)*board.tileSize, 0,(i+1)*board.tileSize, board.row*board.tileSize)
        // stroke(0,255,0)
    }
    // line(s.x, 0, s.x, 100);
    text((getTileX(s.x).toString() +","+ getTileY(s.y).toString()), getTileX(s.x)+board.tileSize/2 + 20, getTileY(s.y)+board.tileSize/2 + 20)
    
    
    fill(0);
    rect(constrain(getTileX(s.x), wall.left, wall.right), constrain(getTileY(s.y), wall.up, wall.down), board.tileSize, board.tileSize);
    if (!s.hitWall){
        s.move(dir);
    } 
    if (s.hitWallAction) {
        console.log("you hit the wall!");
        s.hitWallAction = false;
    }
}

function getTileX(x){
    return floor(x/board.tileSize)*(board.col-1)*2
}
function getTileY(y){
    return floor(y/board.tileSize)*(board.row-1)*2
}

function getWallConstrainX(x){
    if (x<wall.left){
        return wall.left;
    }
    return 
}




// let value = 127;
// const width = 480;
// const height = width;
// const n_column = 16;
// const n_row = n_column;
// function setup() {
//     createCanvas(480, 480);
//     background(0)
// }
  
// function draw() {
//     fill(value);
//     rect(25, 25, 50, 50);
// }
function keyPressed() {
    if (keyCode === LEFT_ARROW || key == 'a' || key == 'A') {
        dir = 'l';
        s.move(dir);
    } else if (keyCode === DOWN_ARROW || key == 's' || key == 'S') {
        dir = 'd';
        s.move(dir);
    } else if (keyCode === RIGHT_ARROW || key == 'd' || key == 'D') {
        dir = 'r';
        s.move(dir);
    } else if (keyCode === UP_ARROW || key == 'w' || key == 'W') {
        dir = 'u';
        s.move(dir);
    }
}


// DOM element
document.getElementById("btn-up").addEventListener("click", function(){
    dir = 'u';
    s.move(dir);
});
document.getElementById("btn-left").addEventListener("click", function(){
    dir = 'l';
    s.move(dir);
});
document.getElementById("btn-down").addEventListener("click", function(){
    dir = 'd';
    s.move(dir);
});
document.getElementById("btn-right").addEventListener("click", function(){
    dir = 'r';
    s.move(dir);
});
