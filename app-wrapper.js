import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';

import configureStore from 'app/redux/create';
import App from 'app';

const store = configureStore();

const AppWrapper = () => (
  <Provider store={store}>
    <NativeRouter>
      <App />
    </NativeRouter>
  </Provider>
);

export default AppWrapper;
