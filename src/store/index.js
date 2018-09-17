import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import throttle from 'lodash/throttle';
import { saveState, loadState } from '../utils/storageUtils';
import reducer from '../reducers';

const persistedState = loadState();


const middleware = [thunk];
  middleware.push(createLogger());


const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware),
);


store.subscribe(throttle(() => {
  console.log('store.subscribe');
  saveState({
    loginReducer: store.getState().loginReducer,
  });
}, 3000));


export { store };

// Without persistor

// const store = createStore(reducer, applyMiddleware(thunk));
// export default store;
