import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FullProductType } from '@app/services';
import { addProduct } from '@app/services';
import { addNewProduct } from '@app/services';
import { allProducts } from '@app/services';

import { ProductScreens } from '@app/navigation';
import { useNavigation } from '@app/navigation';

import { imgEmpty } from '../../../constants';

export const useAddProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(allProducts);
    const navigation = useNavigation();

    const onSubmit = useCallback((props: {
        title: string,
        price: number,
        description: string
    }) => {

        const newProduct: FullProductType = {
            title: props.title,
            price: props.price,
            description: props.description,
            image: imgEmpty,
            category: '',
            id: (products.length + 1).toString(),
        };

        addProduct(newProduct);
        dispatch(addNewProduct(newProduct));
        navigation.navigate(ProductScreens.productList);
    }, [dispatch, navigation]);

    return onSubmit;
};
