import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as pizzaActions from '../actions/pizzas.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PizzaService } from '../../services/pizza.service';
import { of } from 'rxjs';

@Injectable()
export class PizzasEffect {

  constructor(
    private actions$: Actions, private pizzaService: PizzaService
  ) { }

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
    .pipe(
      switchMap(() => {
        return this.pizzaService.getPizzas()
          .pipe(
            map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
            catchError(err => of(new pizzaActions.LoadPizzasFails(err))));
      })
    );
}
