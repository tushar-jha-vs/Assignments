import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Notifications from './src/screens/notifications/Notifications';
import DActive from './src/screens/d-active/DActive';
import {SPACING} from './src/theme';

const App = () => {
  const showNotificationScreen = true;
  return (
    <SafeAreaView style={styles.container}>
      {showNotificationScreen ? <Notifications /> : <DActive />}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    backgroundColor: 'white',
  },
});
