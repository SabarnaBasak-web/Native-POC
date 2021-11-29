/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/globalStore';
import App from './App';
import {name as appName} from './app.json';
import React, {Platform} from 'react';
import {fetchBlog} from './store/actions/Actions';
// import PushNotification from 'react-native-push-notification';

store.dispatch(fetchBlog());

// PushNotification.configure({
//   // (required) Called when a remote is received or opened, or local notification is opened
//   onNotification: function (notification) {
//     console.log('NOTIFICATION:', notification);
//   },
//   requestPermissions: Platform.OS === 'ios',
// });

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppProvider);
