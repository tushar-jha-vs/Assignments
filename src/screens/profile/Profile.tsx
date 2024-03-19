import { View } from 'react-native'

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
    <View style={styles.container}>
      <ProfileHeader />
      <View style={styles.subContainer}>{renderItems()}</View>
    </View>
  )
}

export default Profile
