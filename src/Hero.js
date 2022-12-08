//class loads the starting hero image and changes image based on the walk direction
export default class Hero{
    constructor(tileMap, direction){
        this.tileMap = tileMap;
        this.tileSize = 32;
        
        this.character = new Image();
        this.character.src = "../assets/hero.png";
        this.character.zIndex = 'auto';
    };
    
    //adds hero to the tile screen. send this method to the tilescreen class, so that it can be painted where the array value is a 2
    addHero(ctx, x, y){
        ctx.drawImage(this.character, x, y, this.tileSize, this.tileSize);
    };

    //this method will load an image of the character based on it's direction
    loadImages(direction){
        if(direction === null){
            this.character.src = "..assets/hero.png"
        }
        if(direction === 'north'){
            this.character.src = "..assets/hero-north-walk.gif"
        }
        if(direction === 'south'){
            this.character.src = "..assets/hero-forward-walk.gif"
        }
        if(direction === 'west'){
            this.character.src = "..assets/hero-walk-west.gif"
        }
        if(direction === 'east'){
            this.character.src = "..assets/hero-east-walk.gif"
        }
    }
}