import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Activity, DActive, Dashboard, Notifications, Profile } from '../../screens'
import { COLORS } from '../../theme'
import { HeaderTitle, ResizeMode } from '../../constants'

import { styles } from './tabNavigator-styles'

const Tab = createBottomTabNavigator()
const TAB_BAR_SCREEN_OPTIONS = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: styles.tabBarStyle,
  tabBarActiveBackgroundColor: COLORS.primary[100],
}

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={TAB_BAR_SCREEN_OPTIONS}>
      <Tab.Screen
        name={HeaderTitle.Dashboard}
        component={Dashboard}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.tabBarIcon}
              source={require('../../assets/icons/nav-dashboard.png')}
              resizeMode={ResizeMode.Contain}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={HeaderTitle.DActive}
        component={DActive}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.tabBarIcon}
              source={require('../../assets/icons/nav-d-active.png')}
              resizeMode={ResizeMode.Contain}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={HeaderTitle.Activity}
        component={Activity}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.tabBarIcon}
              source={require('../../assets/icons/nav-activity.png')}
              resizeMode={ResizeMode.Contain}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={HeaderTitle.Notifications}
        component={Notifications}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.tabBarIcon}
              source={require('../../assets/icons/nav-notification.png')}
              resizeMode={ResizeMode.Contain}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={HeaderTitle.Profile}
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.tabBarIcon}
              source={require('../../assets/icons/nav-profile.png')}
              resizeMode={ResizeMode.Contain}
            />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default TabNavigator
