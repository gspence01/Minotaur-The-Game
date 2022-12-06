import TileMap from "./TileScreen.js";
import Move from "./Move.js";

const tileSize = 32;
const canvas = document.getElementById("gameCanvas");
const contxt = canvas.getContext("2d");

let tileMap = new TileMap(tileSize);
//let moveChar = new Move(10000, 1000);
tileMap.setCanvasSize(canvas);

function gameLoop(){
    tileMap.drawMap(contxt);
    tileMap.paintHero(contxt);
    //moveChar.moveDirection();
}

setInterval(gameLoop, 1000);