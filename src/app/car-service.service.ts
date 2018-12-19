import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Car } from 'src/classes/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  http: Http;

  headers: any = {
    "content-type": "application/json",
    "x-apikey": "5c14b0bbe908ae6c73f622ea",
    "cache-control": "no-cache"
  };

  carformUrl: string = "https://angular-53ab.restdb.io/rest/form";

  constructor(http: Http) {
    this.http = http;
  };

  addCar(car: Car): Observable<Response> {
    return this.http.post(this.carformUrl, car, { headers: this.headers })
  };
}

