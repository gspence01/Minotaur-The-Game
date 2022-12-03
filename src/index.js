import TileMap from "./TileScreen.js";

const tileSize = 32;
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

let tileMap = new TileMap(tileSize);

tileMap.drawMap(context);
tileMap.setCanvasSize(canvas);