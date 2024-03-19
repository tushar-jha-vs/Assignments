import React from 'react'
import { View, SafeAreaView } from 'react-native'

import { ASProfileCard, ASProfileHeader } from '../../components'

import { PROFILE_MENU_ITEMS } from '../../constants'

import styles from './profile-styles'

const renderItems = () => {
  return PROFILE_MENU_ITEMS.map((item, index) => {
    return <ASProfileCard title={item} key={index} />
  })
}

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ASProfileHeader />
      <View style={styles.subContainer}>{renderItems()}</View>
    </SafeAreaView>
  )
}

export default Profile