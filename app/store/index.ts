import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import {
  createNetworkMiddleware,
  offlineActionCreators,
  checkInternetConnection,
} from 'react-native-offline';
import rootReducer from '../reducers';

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 100,
});

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [''],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(networkMiddleware, thunk)),
);

const {connectionChange} = offlineActionCreators;

let persistor = persistStore(store, null, () => {
  // After rehydration completes, we detect initial connection
  checkInternetConnection().then(isConnected => {
    store.dispatch(connectionChange(isConnected));
  });
});

export {store, persistor};
