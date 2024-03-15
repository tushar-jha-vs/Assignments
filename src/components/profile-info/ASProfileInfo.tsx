import { View, Text } from 'react-native'
import React from 'react'

import { PROFILE_USER } from '../../constants'

import styles from './asProfileInfo-styles'

const ASProfileInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{PROFILE_USER.name}</Text>
      <Text style={[styles.subTitle, {marginBottom: 12}]}>{PROFILE_USER.email}</Text>
      <Text style={styles.subTitle}>{PROFILE_USER.phoneNumber}</Text>
    </View>
  )
}

export default ASProfileInfo;