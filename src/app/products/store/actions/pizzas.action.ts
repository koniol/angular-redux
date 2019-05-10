import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';
export const GET_PIZZA = '[Products] Get Pizza';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFails implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {
  }
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Array<Pizza>) {
  }
}

export class GetPizza implements Action {
  readonly type = GET_PIZZA;
  constructor(public id: number) {
  }
}

export type PizzasAction = LoadPizzas | LoadPizzasFails | LoadPizzasSuccess | GetPizza ;
