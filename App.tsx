import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './app/Navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {ReduxNetworkProvider} from 'react-native-offline';
import './app/IconLibrary';

import {store, persistor} from './app/store';

const App = () => (
  <Provider store={store}>
    <ReduxNetworkProvider>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <SafeAreaView style={styles.container}>
            <AppNavigator />
          </SafeAreaView>
        </PaperProvider>
      </PersistGate>
    </ReduxNetworkProvider>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
