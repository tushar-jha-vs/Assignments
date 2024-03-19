import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import WebView from 'react-native-webview'

import { DASHBOARD_CARD_IMAGE_SOURCE, WEBVIEW_DASHBOARD_CARD_URI } from '../../constants'

import { styles } from './asDashboardCard-styles'

const ASDashboardCard = () => {
  const [webViewVisible, setWebViewVisible] = useState<boolean>(false)
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={DASHBOARD_CARD_IMAGE_SOURCE['overthinker']} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailTopContainer}>
          <View style={styles.listenIconContainer}>
            <View style={styles.listenContainer}>
              <Text style={styles.listenContainerText}>Listen</Text>
              <Image
                source={DASHBOARD_CARD_IMAGE_SOURCE['tick']}
                style={styles.listenContainerImage}
              />
            </View>
            <Image
              source={DASHBOARD_CARD_IMAGE_SOURCE['marked']}
              style={styles.listenContainerImage}
            />
          </View>
          <Text style={styles.title}>Mastery of the Day</Text>
        </View>
        <View style={styles.detailBottomContainer}>
          <Text style={styles.detailBottomContainerText}>6am to 9pm</Text>
          <TouchableOpacity
            style={styles.detailBottomSubContainer}
            onPress={() => setWebViewVisible(true)}>
            <Modal
              animationType="slide"
              onRequestClose={() => setWebViewVisible(false)}
              transparent={true}
              visible={webViewVisible}>
              <WebView
                source={{
                  uri: WEBVIEW_DASHBOARD_CARD_URI,
                }}
              />
              <TouchableOpacity
                onPress={() => setWebViewVisible(false)}
                style={styles.detailBottomSubContainerButton}>
                <Text>Close</Text>
              </TouchableOpacity>
            </Modal>
            <Image
              source={DASHBOARD_CARD_IMAGE_SOURCE['playButton']}
              style={styles.detailBottomSubContainerImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ASDashboardCard
