import { createStore, applyMiddleware, compose } from 'redux';
import { Platform } from 'react-native';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = require('app/redux/modules/reducer').default;

const configureStore = (preloadedState) => {
  let middlewareDevs = [];

  if (Platform.OS === 'web') {
    middlewareDevs = __DEVELOPMENT__ && __CLIENT__ ? [logger] : [];
  }

  const middlewares = [thunk, ...middlewareDevs];

  const enhancers = [applyMiddleware(...middlewares)];

  let composeEnhancers = compose;

  if (Platform.OS === 'web') {
    /* eslint-disable  */
    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    composeEnhancers =
      __DEVELOPMENT__ &&
      __DEVTOOLS__ &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Prevent recomputing reducers for `replaceReducer`
            shouldHotReload: false,
          })
        : compose;
    /* eslint-enable */
  }

  const store = createStore(
    rootReducer(),
    preloadedState,
    composeEnhancers(...enhancers)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('app/redux/modules/reducer', () => {
      const nextRootReducer = require('app/redux/modules/reducer').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
