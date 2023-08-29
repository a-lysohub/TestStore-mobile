export enum ProductScreens {
  productDetails = 'ProductDetails',
  addProduct = 'AddProduct',
  productList = 'ProductList',
}

export type RouteMap = {
  [ProductScreens.addProduct] : undefined,
  [ProductScreens.productDetails]: { id: string },
  [ProductScreens.productList]: undefined,
};
