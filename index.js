/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { name as appName } from './app.json';
import Store from './source/store/store';

const persistedStore = Store();
const regComponentFunc = () => 
    (<Provider store={persistedStore.store}>
        <PersistGate loading={null} persistor={persistedStore.persistor}>
            <App/>
        </PersistGate>
    </Provider>)
AppRegistry.registerComponent(appName, regComponentFunc);
