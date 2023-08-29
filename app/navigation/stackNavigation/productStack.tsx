import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ProductScreens} from '@app/navigation';

import {ProductList} from '@app/screens';
import {ProductDetails} from '@app/screens';
import {AddProduct} from '@app/screens';

const ProductStack = createStackNavigator();

export const ProductStackNavigator = () => {
	return (
		<ProductStack.Navigator
			initialRouteName={ProductScreens.productList}
			screenOptions={{headerShown: false}}>
			<ProductStack.Screen
				name={ProductScreens.productList}
				component={ProductList}
			/>
			<ProductStack.Screen
				name={ProductScreens.addProduct}
				component={AddProduct}
			/>
			<ProductStack.Screen
				name={ProductScreens.productDetails}
				component={ProductDetails}
			/>
		</ProductStack.Navigator>
	);
};
