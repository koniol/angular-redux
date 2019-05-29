import { PizzaState, reducer } from './pizzas.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface ProductState {
  pizzas: PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: reducer
};

export const getProductsState = createFeatureSelector<ProductState>('products');


