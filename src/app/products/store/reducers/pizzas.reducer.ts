import { Pizza } from '../../models/pizza.model';
import * as fromPizzas from '../actions/pizzas.action';

export interface PizzaState {
  entities: { [id: number]: Pizza };
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: fromPizzas.PizzasAction): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {...state, loading: true};
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const entiti = action.payload
        .reduce((entities: { [id: number]: Pizza }, pizza: Pizza) => {
          return {...entities, [pizza.id]: pizza};
        }, {...state.entities});
      console.log(entiti)

      return {...state, loading: false, loaded: true, entities: entiti};
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {...state, loading: false, loaded: false};
    }

    case fromPizzas.GET_PIZZA: {
      return {...state, loading: false, loaded: false, entities: state[action.id]};
    }
  }
  return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizza = (state: PizzaState, id: number) => state.entities;
