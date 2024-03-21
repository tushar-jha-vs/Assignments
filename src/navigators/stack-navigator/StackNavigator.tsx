import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Splash, OnBoarding, Login } from '../../screens'
import { TabNavigator } from '..'
import { RootNativeStackParamsList } from '../../types'

const NativeStack = createNativeStackNavigator<RootNativeStackParamsList>()

const StackNavigator = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <NativeStack.Screen name="Splash" component={Splash}></NativeStack.Screen>
      <NativeStack.Screen name="OnBoarding" component={OnBoarding}></NativeStack.Screen>
      <NativeStack.Screen name="Login" component={Login}></NativeStack.Screen>
      <NativeStack.Screen name="TabNavigator" component={TabNavigator}></NativeStack.Screen>
    </NativeStack.Navigator>
  )
}

export default StackNavigator
