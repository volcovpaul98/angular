import { Component } from '@angular/core';
import { Employee } from 'src/classes/employee';
// import { Department, Developer, Tester } from 'src/classes/employeeTest';
import { Monkey, Pigeon, Zoo } from 'src/classes/zoo';
import { EmployeeABCD } from 'src/classes/switch';
import { Person } from 'src/classes/persons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curs';
  person : Person;


  constructor() {
    // var depart = new Department();
    // var dev1 = new Developer("John");
    // var dev2 = new Developer("Alex");
    // var test1 = new Tester ("Alex");
    // var test2 = new Tester ("Alexandru");
    // var test3 = new Tester ("Roman");

    // depart.employees.push(dev1);
    // depart.employees.push(test1);

    // depart.generateAllReports();

    // let Profesor1 = new Employee("Popescu", "Andrei", 1 )
    // console.log (Profesor1)
    // let emp = new Employee( "andrei", "last", 1);
    // console.log(emp.firstname);
  //  var zoo = new Zoo();
  //  var monkey1 = new Monkey();
  //  var monkey2 = new Monkey();
  //  var bird1 = new Pigeon ();

  //  zoo.addAnimal(monkey1);
  //  zoo.addAnimal(monkey2);
  //  zoo.addAnimal(bird1);

  //  zoo.triggerAlarm();

  //  var emp = new EmployeeABCD("developer");
  //  emp.printPosition();
  this.person =new Person ("Radu", "Dani");
  }
  public doSomething(){
    this.person.finishedProjects+=2-20+150;

  }
}



