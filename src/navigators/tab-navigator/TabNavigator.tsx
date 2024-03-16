import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Activity, DActive, Dashboard, Notifications, Profile } from '../../screens'
import { COLORS } from '../../theme'
import { HeaderTitle, ResizeMode, TAB_ICON_SOURCE } from '../../constants'
import { RootTabParamsList } from '../../types'

import { styles } from './tabNavigator-styles'

const Tab = createBottomTabNavigator<RootTabParamsList>()

const TabNavigator = () => {
  const tabBarIcon = (name: HeaderTitle) => () =>
    (
      <Image
        style={styles.tabBarIcon}
        source={TAB_ICON_SOURCE[name]}
        resizeMode={ResizeMode.Contain}
      />
    )

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: COLORS.primary[100],
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name={HeaderTitle.Dashboard}
        component={Dashboard}
        options={{ tabBarIcon: tabBarIcon(HeaderTitle.Dashboard) }}
      />
      <Tab.Screen
        name={HeaderTitle.DActive}
        component={DActive}
        options={{ tabBarIcon: tabBarIcon(HeaderTitle.DActive) }}
      />
      <Tab.Screen
        name={HeaderTitle.Activity}
        component={Activity}
        options={{ tabBarIcon: tabBarIcon(HeaderTitle.Activity) }}
      />
      <Tab.Screen
        name={HeaderTitle.Notifications}
        component={Notifications}
        options={{ tabBarIcon: tabBarIcon(HeaderTitle.Notifications) }}
      />
      <Tab.Screen
        name={HeaderTitle.Profile}
        component={Profile}
        options={{ tabBarIcon: tabBarIcon(HeaderTitle.Profile) }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
