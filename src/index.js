import TileMap from "./TileScreen.js";
import Move from "./Move.js";

const tileSize = 32;
const canvas = document.getElementById("gameCanvas");
const contxt = canvas.getContext("2d");

let tileMap = new TileMap(tileSize);
let moveChar = new Move(10000, 1000);
tileMap.setCanvasSize(canvas);

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

function gameLoop(){
    tileMap.drawMap(contxt);
    tileMap.paintHero(contxt, direction);
    moveChar.moveDirection(direction);
}

let direction = null;

setInterval(gameLoop, 1000);