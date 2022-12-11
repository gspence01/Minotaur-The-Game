
const tileSize = 32;
let x = 32;
let y = 32;
let direction = null;

const canvas = document.getElementById("gameCanvas");
const contxt = canvas.getContext("2d");

class Hero{
    constructor(tileMap, direction){
        this.tileMap = tileMap;
        this.tileSize = 32;
        this.direction = direction;
        
        this.character = new Image();
        this.character.src = "../assets/hero.png";
        this.character.zIndex = 'auto';
    };
    
    //adds hero to the tile screen. send this method to the tilescreen class, so that it can be painted where the array value is a 2
    addHero(ctx, x, y){
        if(this.direction === null){
            this.character.src = "..assets/hero.png"
        }
        if(this.direction === 'north'){
            this.character.src = "..assets/hero-north-walk.gif"
        }
        if(this.direction === 'south'){
            this.character.src = "..assets/hero-forward-walk.gif"
        }
        if(this.direction === 'west'){
            this.character.src = "..assets/hero-walk-west.gif"
        }
        if(this.direction === 'east'){
            this.character.src = "..assets/hero-east-walk.gif"
        }
        ctx.drawImage(this.character, x, y, this.tileSize, this.tileSize);
    };

    //this method will load an image of the character based on it's direction
    loadImages(){
        
    }
}
class TileMap{
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

    /*getCoords(){
        let array = [];
        for(let row = 0; row<this.map.rows; row++){
            for(let column = 0; column<this.map.columns; column++){
                const tile = this.map.getTile(column, row);
                if(tile === 1){
                    array.push([row*this.tileSize, column*this.tileSize])
                };
                
            }
        }
        return array;
    }*/
    
}

let tileMap = new TileMap(tileSize);
tileMap.setCanvasSize(canvas);

//this function disables any scrolling of the browser when the user pressses arrow keys. Just makes the game more playable without the window moving around.
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

document.addEventListener('keydown', function(e){
    if(e.repeat) return;
    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})

document.addEventListener('keyup', function(e){
    direction = null;
})
//movedirection should only change x or y when character's position IS NOT at specified positions of the walls
//TileMap method to return true or false, assign to variable and pass into if statement here 
//method to 

//let wallCoords = tileMap.getCoords();
function moveCharacter(direction){
    /*for(let i = 0; i<wallCoords.length; i++){
        if (x<=wallCoords[i][0]+32 && x<=wallCoords[i][0] || y>=wallCoords[i][1]+32 && y<=wallCoords[i][1]){
            console.log("wall")
        }
        else{
            console.log('floor')
        }
    }*/
    if(direction === 'west'){
        x-=1;
    };
    if(direction === 'east'){
        x+=1;
    };
    if(direction === 'north'){
        y-=1;
    };
    if(direction === 'south'){
        y+=1;
    };
}

function gameLoop(){
    tileMap.drawMap(contxt);

    tileMap.paintHero(contxt, x, y);

    moveCharacter(direction);
}


setInterval(gameLoop, 1000/75);