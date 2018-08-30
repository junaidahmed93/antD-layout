import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import reducer from '../reducers';
// import { PERSIST_KEY } from '../constants/appConstants';


// const persistedReducer = persistReducer(
//   {
//     key: 'root',
//     storage,
//     stateReconciler: hardSet,
//     transforms: [encryptor],
//   },
//   reducer,
// );


// With Persistor
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };

// Without persistor

// const store = createStore(reducer, applyMiddleware(thunk));
// export default store;
