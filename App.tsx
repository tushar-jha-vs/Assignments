import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

import { COLORS, SPACING } from './src/theme'
import { DActive, Notifications,DashBoard } from './src/screens'

const App = () => {
  const showNotificationScreen = true
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content"/>
      {/* {showNotificationScreen ? <Notifications /> : <DActive />} */}
      <DashBoard/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    backgroundColor: COLORS.white,
  },
})
