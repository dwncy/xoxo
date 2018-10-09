import { AppRegistry } from 'react-native';
import AppWrapper from './app-wrapper';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppWrapper);
