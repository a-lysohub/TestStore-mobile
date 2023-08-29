export const getProducts = async () => {
    const dataResp = await fetch('https://fakestoreapi.com/products');
    const data = await dataResp.json();
    return data;
};
