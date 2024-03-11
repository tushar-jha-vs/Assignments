// Third-party libraries
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// Absolute imports
import Notifications from './src/screens/notifications/Notifications';
import DActive from './src/screens/D-active/DActive';

const App = () => {
  const screen = false;
  return (
    <SafeAreaView style={styles.container}>
      {screen ? <Notifications /> : <DActive />}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
