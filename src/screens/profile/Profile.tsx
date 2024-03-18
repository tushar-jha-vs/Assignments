import { View, SafeAreaView } from 'react-native'
import React from 'react'

import { ProfileCard, ProfileHeader } from '../../components'
import { PROFILE_MENU_ITEMS } from '../../constants'

import styles from './profile-styles'

const renderItems = () => {
  return PROFILE_MENU_ITEMS.map((item, index) => {
    return <ProfileCard title={item} key={index} />
  })
}

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />

      <View style={styles.subContainer}>{renderItems()}</View>
    </SafeAreaView>
  )
}

export default Profile
