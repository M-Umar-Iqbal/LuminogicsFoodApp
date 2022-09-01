// import rootReducer from '../reducers/rootReducer';
// import {createStore} from 'redux';

// const store = createStore(rootReducer);
// export default store;

import rootReducer from '../reducers/rootReducer';
import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'persist-store',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
