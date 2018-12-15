import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from 'src/classes/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  http: Http;


  headers: any = {
    "content-type": "application/json",
    "x-apikey": "5c14b0bbe908ae6c73f622ea",
    "cache-control": "no-cache"
  };
  // getAll(): any {
  //   return this.http.get(this.employeesUrl, { headers: this.headers });
  // };
  saveUser(user: User): Observable<Response> {
    return this.http.post(this.employeesUrl, user, { headers: this.headers });
  };
  getAll(): Observable<User[]> {
    var mapToUsers = map((res: Response) => {
      return res.json();
    })
    return mapToUsers(this.http.get(this.employeesUrl, { headers: this.headers }));
  };
  deleteUser(id: string): Observable<Response> {
    return this.http.delete(this.employeesUrl + "/" + id ,{ headers: this.headers });
  };

  employeesUrl: string = "https://angular-53ab.restdb.io/rest/employees";
  constructor(http: Http) {
    this.http = http;
  };

}

