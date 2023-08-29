import React from 'react';
import {Image, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Header} from '@app/components';
import {useGetProducts} from '@app/screens';
import {productDetailsStyles} from './productDetails.styles';

import {typography} from '@app/theme';

export const ProductDetails = ({route}) => {
	const {t} = useTranslation();
	const {id} = route.params;

	const products = useGetProducts();
	const currentProduct = products.find(
		product => product.id === id
	);
	const {image, title, description, price} = currentProduct;

	return (
		<View>
			<Header backBtn title={t('productDetails')} />
			<View style={productDetailsStyles.container}>
				<Text style={typography.price}>{title}</Text>
				<Image
					source={{uri: image}}
					style={productDetailsStyles.img}
				/>
				<Text
					style={[
						typography.price,
						productDetailsStyles.price,
					]}>
					{'$ ' + price}
				</Text>
				<Text style={typography.captionSmall}>
					{description}
				</Text>
			</View>
		</View>
	);
};
