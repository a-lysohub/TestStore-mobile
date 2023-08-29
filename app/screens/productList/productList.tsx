import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {useNavigation} from '@app/navigation';
import {useGetProducts} from '@app/screens';

import {Header} from '@app/components';
import {ModalNotification} from '@app/components';
import {ProductItem} from '@app/screens';
import {productListStyles} from './productList.styles';

import {ProductScreens} from '@app/navigation';

export const ProductList = () => {
	const {t} = useTranslation();
	const products = useGetProducts();
	const navigation = useNavigation();

	const [isAddModalVisible, setAddModalVisible] =
		useState(false);

	const addBtnHandler = () => setAddModalVisible(true);
	const addNewHandler = () => {
		setAddModalVisible(!isAddModalVisible);
		navigation.navigate(ProductScreens.addProduct);
	};
	const selectProductHandler = (productId: string) => {
		navigation.navigate(ProductScreens.productDetails, {
			id: productId,
		});
	};

	return (
		<View style={productListStyles.container}>
			<Header
				title={t('productsList')}
				addNew
				onAddPress={addBtnHandler}
			/>
			<View style={productListStyles.productList}>
				<FlatList
					numColumns={2}
					data={products}
					keyExtractor={item => item.id}
					showsVerticalScrollIndicator={false}
					renderItem={({item}) => (
						<ProductItem
							key={item.id}
							image={item.image}
							price={item.price}
							title={item.title}
							onSelect={() => selectProductHandler(item.id)}
						/>
					)}
				/>
			</View>
			{/* add modal */}
			<ModalNotification
				isVisible={isAddModalVisible}
				title={t('addNewModal.title')}
				text={t('addNewModal.text')}
				onCancelTitle={t('cancel')}
				cancelHandler={() =>
					setAddModalVisible(!isAddModalVisible)
				}
				onSuccessTitle={t('add')}
				successHandler={addNewHandler}
			/>
		</View>
	);
};
