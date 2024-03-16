import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { StackNavigator } from './src/navigators'
import { StatusBar } from 'react-native'
import { COLORS } from './src/theme'

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
