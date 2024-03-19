import React from 'react'
import { Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Activity, DActive, Dashboard, Notifications, Profile } from '../../screens'
import { RootTabParamsList } from '../../types'

import { HeaderTitle, ResizeMode, TAB_ICON_SOURCE } from '../../constants'

import { styles } from './tabNavigator-styles'

const Tab = createBottomTabNavigator<RootTabParamsList>()

const TabNavigator = () => {
  const tabBarIconOptions = (title: HeaderTitle) => {
    return {
      tabBarIcon: ({ focused }: { focused: Boolean }) => (
        <View style={[styles.iconContainer, focused && styles.activeIcon]}>
          <Image
            style={styles.tabBarIcon}
            source={TAB_ICON_SOURCE[title]}
            resizeMode={ResizeMode.Contain}
          />
        </View>
      ),
    }
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name={HeaderTitle.Dashboard}
        component={Dashboard}
        options={tabBarIconOptions(HeaderTitle.Dashboard)}
      />
      <Tab.Screen
        name={HeaderTitle.DActive}
        component={DActive}
        options={tabBarIconOptions(HeaderTitle.DActive)}
      />
      <Tab.Screen
        name={HeaderTitle.Activity}
        component={Activity}
        options={tabBarIconOptions(HeaderTitle.Activity)}
      />
      <Tab.Screen
        name={HeaderTitle.Notifications}
        component={Notifications}
        options={tabBarIconOptions(HeaderTitle.Notifications)}
      />
      <Tab.Screen
        name={HeaderTitle.Profile}
        component={Profile}
        options={tabBarIconOptions(HeaderTitle.Profile)}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
