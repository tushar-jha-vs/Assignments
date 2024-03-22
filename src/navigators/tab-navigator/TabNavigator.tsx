import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'

import { Home, Education, Discovery, News, Map } from '../../screens'
import { RootTabParamsList } from '../../types'
import { COLORS, SPACING } from '../../theme'

import { NavigationScreens, TAB_ICON_SOURCE } from '../../constants'

import { styles } from './tabNavigation-styles'

const Stack = createBottomTabNavigator<RootTabParamsList>()

const tabScreenOptions = (screenName: string) => {
  return {
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <Icon
        name={TAB_ICON_SOURCE[screenName]}
        size={SPACING.space_28}
        style={focused && styles.activeIcon}
      />
    ),
  }
}

const TabNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary[50],
        tabBarLabelStyle: styles.tabBarLabel,
      }}>
      <Stack.Screen
        name={NavigationScreens.Home}
        component={Home}
        options={tabScreenOptions(NavigationScreens.Home)}></Stack.Screen>
      <Stack.Screen
        name={NavigationScreens.Map}
        component={Map}
        options={tabScreenOptions(NavigationScreens.Map)}></Stack.Screen>
      <Stack.Screen
        name={NavigationScreens.Education}
        component={Education}
        options={tabScreenOptions(NavigationScreens.Education)}></Stack.Screen>
      <Stack.Screen
        name={NavigationScreens.Discovery}
        component={Discovery}
        options={tabScreenOptions(NavigationScreens.Discovery)}></Stack.Screen>
      <Stack.Screen
        name={NavigationScreens.News}
        component={News}
        options={tabScreenOptions(NavigationScreens.News)}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default TabNavigator
