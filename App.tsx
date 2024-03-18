import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { StackNavigator } from './src/navigators'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
