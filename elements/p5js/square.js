class Square {
    constructor (x,y,speed, board){
        this.x = x;
        this.y = y;
        this.speed = 1;
        if (!isNaN(speed)){
            this.speed = speed;
        }
        this.limit = {
            top: 0,
            left: 0,
            bottom: (board.row-1)*board.tileSize,
            right: (board.col-1)*board.tileSize
        }
        
        this.hitWall = false;
        this.hitWallAction = false;
    }

    move(dir) {
        this.hitWall = false;
        let mx = 0;
        let my = 0;
        switch (dir) {
            case 'u':
                mx = 0;
                my = -1;
                break;

            case 'l':
                mx = -1;
                my = 0;
                
                break;
        
            case 'd':
                mx = 0;
                my = 1;
                
                break;
        
            case 'r':
                mx = 1;
                my = 0;
                
                break;
        
            default:
                break;
        }
        let prev_x = this.x;
        let prev_y = this.y;
        this.x += mx*this.speed;
        this.y += my*this.speed;
        // console.log(this.x, this.y, this.limit)
        if (this.x > this.limit.right || this.x < this.limit.left || this.y > this.limit.bottom || this.y < this.limit.top){
            this.x = prev_x;
            this.y = prev_y;
            this.hitWall = true;
            this.hitWallAction = true;
        }
    }

    setSpeed(speed){
        this.speed = speed;
    }
}