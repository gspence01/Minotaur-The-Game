export default class Move{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    moveDirection(){
        let direction = '';
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
        let test = [this.x,this.y];
        console.log(test);
    }
}