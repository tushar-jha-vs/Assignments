import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MyReflection from '../../screens/activity/my-reflection/MyReflection'
import { RootStackParamList } from '../../types'

import TabNavigator from '../tab-navigator/TabNavigator'

const Stack = createStackNavigator<RootStackParamList>()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ animationEnabled: true, gestureDirection: 'vertical' }}></Stack.Screen>
      <Stack.Screen
        name="My Reflection"
        component={MyReflection}
        options={{ animationEnabled: true, gestureDirection: 'vertical' }}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default StackNavigator
