import { Image, Text, View } from 'react-native'

import { notificationIcon } from '../../constants'

import { styles } from './NoData-styles'

const NoData = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={notificationIcon} style={styles.image} />
        <View>
          <Text style={styles.text}>No notifications yet!</Text>
          <Text style={styles.subText}>
            {'You have no notification right now.\nCome back later.'}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default NoData
