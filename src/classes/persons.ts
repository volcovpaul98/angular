export class Person  {
    public readonly firstName:string;
    public readonly lastName:string;
    public finishedProjects:number;
    

    constructor(firstName:string ,lastName:string ) {
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.finishedProjects = 0;
       
        
    }
}