import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
  const middlewares = [thunk];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    rootReducer(),
    preloadedState,
    compose(...enhancers)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  /* eslint-enable */

  return store;
};

export default configureStore;
