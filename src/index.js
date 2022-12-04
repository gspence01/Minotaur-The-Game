import TileMap from "./TileScreen.js";

const tileSize = 32;
const canvas = document.getElementById("gameCanvas");
const contxt = canvas.getContext("2d");

let tileMap = new TileMap(tileSize);
tileMap.setCanvasSize(canvas);

function gameLoop(){
    tileMap.drawMap(contxt)
}

setInterval(gameLoop, 1000)