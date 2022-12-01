//TileScreen.js will house the class that constructs the maze
class TileMap{
    constructor(tileSize){
        this.tileSize = tileSize;
        //this.wall = new Image(); <-- this initiates images for the walls of the maze
        //this.floor = new Image(); <-- initiates image for floor of maze

    }

    /* below, I will define a map that will be a nested array. Each index for the outer will represent the rows, the indexes of the inner define the floor/wall tiles of each column
    0 = floor
    1 = wall
    2 = hero
    3 = enemy*/

    map = []
}