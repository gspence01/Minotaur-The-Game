import TileMap from "./TileScreen.js";

const tileSize = 32;
let x = 32;
let y = 32;
let direction = null;

const canvas = document.getElementById("gameCanvas");
const contxt = canvas.getContext("2d");

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
function moveCharacter(direction){
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