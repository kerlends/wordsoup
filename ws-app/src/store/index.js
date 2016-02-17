import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';

import { rootReducer } from '../reducers';

const enhancer = compose(
  applyMiddleware(promise),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer('../reducers'))
  }

  return store;
}

export const store = configureStore();
