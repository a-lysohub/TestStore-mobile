import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ProductStackNavigator} from '@app/navigation';

export const Navigator = () => {
	return (
		<NavigationContainer>
			<ProductStackNavigator />
		</NavigationContainer>
	);
};
