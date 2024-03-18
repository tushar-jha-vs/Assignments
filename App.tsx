import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { StackNavigator } from './src/navigators'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { SPACING } from './src/theme'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <StatusBar backgroundColor="transparent" translucent />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
  },
})

export default App
