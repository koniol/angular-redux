import { PizzaState, reducer } from './pizzas.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzas from '../reducers/pizzas.reducer';


export interface ProductState {
  pizzas: PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: reducer
};

export const getProductsState = createFeatureSelector<ProductState>('products');
export const getPizzaState = createSelector(getProductsState, (state: ProductState) => state.pizzas);
export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);
export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

// export const getSinglePizza = createSelector(getPizzasEntities, ());
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getAllPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);

