import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../models/pizza.model';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(public http: HttpClient) {
  }

  getPizzas(): Observable<Array<Pizza>> {
    return this.http.get<Array<Pizza>>('../../../assets/db.json')
      .pipe(
        catchError(err => throwError(err))
      );
  }
}
