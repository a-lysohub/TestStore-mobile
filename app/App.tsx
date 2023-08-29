import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import {Navigator} from '@app/navigation';

import {palette} from '@app/theme';
import {store} from '@app/services';

function App(): JSX.Element {
	return (
		<Provider store={store}>
			<StatusBar backgroundColor={palette.darkGrey} />
			<Navigator />
		</Provider>
	);
}

export default App;
