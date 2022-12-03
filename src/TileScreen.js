//TileScreen.js will house the class that constructs the maze

export default class TileMap{
    constructor(tileSize){
        this.tileSize = tileSize;
        this.wall = new Image(); 
        this.floor = new Image();

        this.floor.src = "../assets/floor.png"
        this.wall.src = "../assets/wall.png"

    };

    /* below, I will define a map that will be a nested array. Each index for the outer will represent the rows, the indexes of the inner define the floor/wall tiles of each column
    0 = floor
    1 = wall
    2 = hero
    3 = enemy*/

    map = {
        columns: 3,
        rows: 3,
        tsize: this.tileSize,
        //note to self: tiles is stored in 1d array rather than 2d because 1d allows array values to be read direactly --> smoother loading

        //test array
        tiles: [
            1, 1, 1,
            1, 0, 1,
            1, 1, 1
        ],
        //this method returns index of the array e.g. (i want tile at coord (1,1) = 1*3+1 = index 4)
        getTile(x, y){
            return [x*map.columns+y];
        }
    };

    drawMap(ctx){
        for(let column = 0; column<this.map.columns; column++){
            for(let row = 0; row<this.map.rows; row++){
                const tile = map.getTile(column, row);
                //if statements to assign number to tile
                //draws wall when tile is id'd as 1
                if(tile === 1){
                    ctx.drawImage(this.wall, column*this.map.tsize, row*this.map.tsize, this.map.tsize, this.map.tsize);
                };

                //draws floor when tile = 0
                if(tile === 0){
                    if(tile === 1){
                        ctx.drawImage(this.floor, column*this.map.tsize, row*this.map.tsize, this.map.tsize, this.map.tsize);
                    };
                }
            }
        }
    };
    //makes the canvas the size of however big the planned map is
    setCanvasSize(canvas){
        canvas.width = this.map.columns * this.tileSize;
        canvas.height = this.map.rows*this.tileSize
    }

}