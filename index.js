import { Navigation } from 'react-native-navigation';
// import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import HomeScreen from './src/home.screen';
import DetailScreen from './src/detail.screen';

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HomeScreen',
            }
          },
        ]
      }
    }
  })
});

// AppRegistry.registerComponent(appName, () => App);
