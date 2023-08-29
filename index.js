import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

import './i18n.config';

AppRegistry.registerComponent(appName, () => App);
