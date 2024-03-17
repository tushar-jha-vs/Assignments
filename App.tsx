import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { StackNavigator } from './src/navigators'
import { StatusBar } from 'react-native'
import { COLORS } from './src/theme'
import ASMyReflectionCard from './src/components/my-reflection-card/ASMyReflectionCard'
import MyReflection from './src/screens/activity/my-reflection/MyReflection'
import ASPopUp from './src/components/pop-up/ASPopUp'

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
