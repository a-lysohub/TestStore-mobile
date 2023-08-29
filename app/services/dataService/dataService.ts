import AsyncStorage from '@react-native-async-storage/async-storage';
import { DATA_STORAGE_KEY } from './constants';
import { getProducts } from '../api/api';
import { FullProductType } from '../api/types';

export const addProduct = async (product: FullProductType) => {
    try {
        const products = await getData();
        products.push(product);
        await AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(products));
    } catch (e) {
        // error reading value
    }
};

export const getData = async (): Promise<FullProductType[]> => {
    try {
        const jsonData = await AsyncStorage.getItem(DATA_STORAGE_KEY);
        if (jsonData !== null) {
            return JSON.parse(jsonData);
        }

        const products = await getProducts();
        await AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(products));
        return products;
    } catch (e) {
        // error reading value
    }
    return [];
};
