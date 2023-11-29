import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const initStore = () => {
  let composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  //Check if function running on the sever or client

  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(
      applyMiddleware(thunk) //Applying redux-thunk middleware
    )
  );

  return store;
};

export default initStore;
