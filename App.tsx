import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { StackNavigator } from './src/navigators'
import { StatusBar } from 'react-native'
import { COLORS } from './src/theme'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
