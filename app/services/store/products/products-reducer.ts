import { FullProductType } from '../../api/types';
import { ADD_FULL_PRODUCTS, NEW_PRODUCT } from './products-const';

export const products = (state: FullProductType[] = [], action: any) => {
  switch (action.type) {
    case ADD_FULL_PRODUCTS: {
      state = action.products;
      return state;
    }
    case NEW_PRODUCT: {
      state = [...state, action.product];
      return state;
    }
    default: {
      return state;
    }
  }
};
