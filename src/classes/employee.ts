export class Employee {

    public readonly firstname:string;
    public readonly lastname:string;
    genderType:GenderType;

    constructor(first:string, last:string, gender:GenderType){
        this.firstname = first;
        this.lastname = last;
        this.genderType = gender;
    }
}

