import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { allProducts } from '@app/services';
import { getData } from '@app/services';
import { addFullProducts } from '@app/services';

export const useGetProducts = () => {
    const products = useSelector(allProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProducts() {
            const data = await getData();
            dispatch(addFullProducts(data));
        }
        loadProducts();
    }, []);

    return products;
};
