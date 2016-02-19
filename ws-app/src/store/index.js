import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers';

const middlewares = [promise, thunk];
const enhancer = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer('../reducers'))
  }

  return store;
}
