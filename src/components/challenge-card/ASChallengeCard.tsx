import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import WebView from 'react-native-webview'

import {
  CHALLENGE_IMAGE_SOURCE,
  CHALLENGE_CARD_COLOR,
  NOTIFICATION_IMAGE_SOURCE,
} from '../../constants'

import { styles } from './asChallengeCard-styles'

interface IASDashboardListCardProps {
  id: string
  title: string
  isFav: string
  startingTime: string
  endingTime: string
  isCompleted: string
}

const ASChallengeCard = (props: IASDashboardListCardProps) => {
  const { id, title, isFav, startingTime, endingTime, isCompleted } = props
  const [webViewVisible, setWebViewVisible] = useState<boolean>(false)
  return (
    <View style={[styles.container, { backgroundColor: CHALLENGE_CARD_COLOR[id] }]}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image source={NOTIFICATION_IMAGE_SOURCE[title.split(' ')[0]]} style={styles.image} />
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerSubContainer}>
              <View style={styles.headerSubContainerContent}>
                <Text style={styles.headerSubContainerContentTitle}>Challenge {id}</Text>
                {isCompleted === 'true' ? (
                  <Image
                    source={CHALLENGE_IMAGE_SOURCE['completedTick']}
                    style={styles.headerSubContainerContentImage}
                  />
                ) : null}
              </View>
              <Image
                source={
                  isFav === 'true'
                    ? CHALLENGE_IMAGE_SOURCE['bookmark']
                    : CHALLENGE_IMAGE_SOURCE['removeBookmark']
                }
                style={styles.headerSubContainerImage}
              />
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.duration}>
              {startingTime} to {endingTime}
            </Text>
            <TouchableOpacity
              style={styles.bottomSubContainer}
              onPress={() => setWebViewVisible(true)}>
              <Modal
                visible={webViewVisible}
                animationType="slide"
                onRequestClose={() => setWebViewVisible(false)}
                transparent={true}>
                <WebView
                  source={{
                    uri: 'https://youtu.be/p4YBeXhkmyI',
                  }}
                />
              </Modal>
              <Image
                source={CHALLENGE_IMAGE_SOURCE['playButton']}
                style={styles.bottomSubContainerImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ASChallengeCard
