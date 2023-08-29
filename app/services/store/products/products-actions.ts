import { FullProductType } from '../../api/types';
import { ADD_FULL_PRODUCTS, NEW_PRODUCT } from './products-const';

export const addFullProducts = (products: FullProductType[]) => ({
  type: ADD_FULL_PRODUCTS,
  products: products,
});

export const addNewProduct = (product: FullProductType) => ({
  type: NEW_PRODUCT,
  product,
});
