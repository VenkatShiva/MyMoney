import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const persistConfig = {
    key: 'shiva',
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    // whitelist: [
    //   'authReducer',
    // ],
    // // Blacklist (Don't Save Specific Reducers)
    // blacklist: [
    //   'counterReducer',
    // ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
    persistedReducer,
    applyMiddleware(thunk),
);
let persistor = persistStore(store);
const Store = ()=> { return {store, persistor}};
export default Store;