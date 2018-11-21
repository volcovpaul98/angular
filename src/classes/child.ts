export class Child {
  
    balls:boolean[];
    id:number;
    name:string;
    
    addBalls(){
        this.balls.push(true);
    };
    
    
    removeBalls(){
        this.balls.pop();
    };
}

