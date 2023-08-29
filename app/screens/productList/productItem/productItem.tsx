import React, {FC} from 'react';
import {Pressable, Text, Image} from 'react-native';

import {productItemStyles} from './productItem.styles';
import {ProductItemProps} from './productItem.props';
import {imgEmpty} from '../../../constants';
import {ShowProductType} from '../../../../types';

import {typography} from '@app/theme';

export const ProductItem: FC<
	ProductItemProps & ShowProductType
> = ({title, price, image, onSelect}) => {
	return (
		<Pressable
			style={productItemStyles.container}
			onPress={onSelect}>
			<Image
				source={{uri: image ?? imgEmpty}}
				style={productItemStyles.img}
			/>
			<Text
				style={[productItemStyles.title, typography.item]}>
				{title}
			</Text>
			<Text
				style={[productItemStyles.price, typography.price]}>
				{price + '$'}
			</Text>
		</Pressable>
	);
};
