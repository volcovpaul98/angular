export interface IEmployee {
    getReport(): string;
    name:string;
}
export class Developer implements IEmployee {
    name:string;
    constructor(name:string) {
        this.name =name;
        
    }
    getReport(): string {
        return "developer report from" + this.name;
    }
    public technology:string;
}
export class Tester implements IEmployee {
    name:string;
    getReport(): string {
        return "testing report from" + this.name;
    }
}
export class Department {
    public employees: IEmployee[];
/**
 *
 */
constructor() {
    this.employees = [];
    
}

    generateAllReports(): void{
        for (var i =0; <this.eployees.length; i++){
            console.log(this.employees[i].getReport());
        }
    }
}
