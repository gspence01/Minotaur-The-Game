import Hero from "./Hero.js"

//TileScreen.js will house the class that constructs the maze

export default class TileMap{
    constructor(tileSize){
        this.tileSize = tileSize;
        
        this.wall = new Image(); 
        this.wall.src = "../assets/wall.png";

        this.floor = new Image();
        this.floor.src = "../assets/floor.png";

        this.hero = new Hero(this);

    };

    /* below, I will define a map that will be a nested array. Each index for the outer will represent the rows, the indexes of the inner define the floor/wall tiles of each column
    0 = floor
    1 = wall
    2 = hero
    3 = enemy*/

    map = {
        columns: 20,
        rows: 20,
        tsize: this.tileSize,
        //note to self: tiles is stored in 1d array rather than 2d because 1d allows array values to be read direactly --> smoother loading

        tiles: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
            1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
            1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,
            1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,
            1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,
            1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,
            1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,
            1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,
            1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,
            1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,
            1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,
            1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,
            1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,
            1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        ],
        //this method returns index of the array e.g. (i want tile at coord (1,1) = 1*3+1 = index 4)
        getTile(x, y){
            const tile = [x*this.columns+y];
            return this.tiles[tile];
        }
    };

    drawElement(ctx, url, x, y, size){
        ctx.drawImage(url, x*this.tileSize, y*this.tileSize, size, size);

    };

    drawMap(ctx){
        for(let row = 0; row<this.map.rows; row++){
            for(let column = 0; column<this.map.columns; column++){
                const tile = this.map.getTile(column, row);
                //if statements to assign number to tile
                //draws wall when tile is id'd as 0
                if(tile === 0){
                    this.drawElement(ctx, this.wall, row, column, this.tileSize);
                };

                //draws floor when tile = 1
                if(tile === 1){
                    this.drawElement(ctx, this.floor, row, column, this.tileSize);
                }
            }
        }
        
    };
    //makes the canvas the size of however big the planned map is
    setCanvasSize(canvas){
        canvas.width = this.map.columns * this.tileSize;
        canvas.height = this.map.rows*this.tileSize
    }

    paintHero(ctx, x, y){
        this.hero.addHero(ctx, x, y)
    }
    
}