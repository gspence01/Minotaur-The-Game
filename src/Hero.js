//class loads the starting hero image and changes image based on the walk direction
export default class Hero{
    constructor(tileMap){
        this.tileMap = tileMap;
        this.tileSize = 32;
        
        this.character = new Image();
        this.character.src = "../assets/hero.png";
        this.character.zIndex = 'auto';
    };

    //adds hero to the tile screen. send this method to the tilescreen class, so that it can be painted where the array value is a 2
    addHero(ctx, x, y){
        ctx.drawImage(this.character, x, y, this.tileSize, this.tileSize);
    }
}