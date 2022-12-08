//move class will change the character's direction based on event listeners and move character

export default class Move{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    moveDirection(direction){
        if(direction === 'west'){
            this.x-=1;
        }
        if(direction === 'east'){
            this.x+=1;
        }
        if(direction === 'north'){
            this.y-=1;
        }
        if(direction === 'south'){
            this.y+=1;
        }
        return [this.x, this.y];
    }

    

}