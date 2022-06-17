/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import RootNavigation from './src/navigation';
import {store, persistor} from './src/models/store';
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {PersistGate} from 'redux-persist/integration/react';
import {StyleSheet} from 'react-native';

const App = () => {
  useEffect(() => {
    EStyleSheet.build();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
