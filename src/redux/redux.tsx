import {combineReducers,createStore,} from 'redux';

interface reduxBilgiler {
  type: string;
  product:Object;
}

interface reduxProduct {
  type: string;
  product:number;
}


interface propsOzel {
  id: number;
  isim: string;
  fiyat:number;
  resim:string;
}

export const addBasket = (product:reduxBilgiler) => ({
  type: 'ADD_BASKET',
  product,
});

export const removeBaset = (product:reduxBilgiler) => ({
  type: 'REMOVE_BASKET',
  product,
});

export const products = (state = [], action:reduxProduct) => {
  switch (action.type)
  {
    case 'ADD_BASKET':
      return [...state,action.product];
    case 'REMOVE_BASKET':
      let newState = [...state];
      const dataRemoved = newState.filter((el:propsOzel) => {
        return el.id !== action.product;
      });
      return dataRemoved;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  products,
});

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
