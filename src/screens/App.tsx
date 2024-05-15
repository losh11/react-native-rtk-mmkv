import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {pStore, store} from '../store';
import {PersistGate} from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={pStore}>
        <Numpad />
      </PersistGate>
    </Provider>
  );
};

const Numpad: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>hello</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cornsilk',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
  },
});

export default App;
