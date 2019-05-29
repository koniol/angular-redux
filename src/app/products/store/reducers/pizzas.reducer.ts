import { Pizza } from '../../models/pizza.model';
import * as fromPizzas from '../actions/pizzas.action';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface PizzaState {
  entities: { [id: number]: Pizza };
  loaded: boolean;
  loading: boolean;
  entity: Pizza;
}

const pizzaAdapter = createEntityAdapter<Pizza>();
export interface State extends EntityState<PizzaState> { }

export const defaultState = {
  entities: {},
  loaded: false,
  loading: false,
  entity: {}
};

export const initialState: PizzaState = pizzaAdapter.getInitialState(defaultState);

export function reducer(state = initialState, action: fromPizzas.PizzasAction): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {...state, loading: true};
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const entity = action.payload.reduce((entities: { [id: number]: Pizza }, pizza: Pizza) => {
        return {...entities, [pizza.id]: pizza};
      }, {...state.entities});

      return {...state, loading: false, loaded: true, entities: entity};
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {...state, loading: false, loaded: false};
    }

    case fromPizzas.GET_SINGLE_PIZZA: {
      return {...state, entity: state.entities[action.id]};
    }
  }
  return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizza = (state: PizzaState) => state.entity;
