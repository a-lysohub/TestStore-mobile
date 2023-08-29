import { combineReducers } from 'redux';

import { products } from './products/products-reducer';

export const rootReducer = combineReducers({
  products,
});
