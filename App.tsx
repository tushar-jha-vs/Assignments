import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {Provider} from 'react-redux'

import { StackNavigator } from './src/navigators'
import { COLORS } from './src/theme'
import { store } from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
