import { createSelector } from '@ngrx/store';
import { getRouterState } from '../../../store/reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import { getProductsState, ProductState } from '../reducers';

export const getPizzaState = createSelector(getProductsState, (state: ProductState) => state.pizzas);
export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);
export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getSinglePizza = createSelector(getPizzaState,  fromPizzas.getPizza);
export const getSinglePizzaByRouter = createSelector(getPizzasEntities, getRouterState, (entities, router) => {
  return entities[router.state.params.pizzaId];
} );

export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getAllPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);

export const getState = createSelector(getRouterState, (state) => state.state);
export const getSelectedPizza  = createSelector(getState, (state) => state.params.pizzaId);
