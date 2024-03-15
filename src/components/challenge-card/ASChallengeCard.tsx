import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './asChallengeCard-styles'

const PLAY_BUTTON = require('../../assets/icons/audio.png')
const COMPLETED_TICK = require('../../assets/icons/complete.png')
const BOOKMARK = require('../../assets/icons/marked-favourite.png')
const REMOVE_BOOKMARK = require('../../assets/icons/not-marked-favourite.png')
const REMINDER = require('../../assets/icons/reminder.png')

const ASChallengeCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
            <Image source={REMINDER} style={styles.image} />
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerSubContainer}>
              <View style={styles.headerSubContainerContent}>
                <Text style={styles.headerSubContainerContentTitle}>Challenge 1</Text>
                <Image source={COMPLETED_TICK} style={styles.headerSubContainerContentImage}/>
              </View>
              <Image source={REMOVE_BOOKMARK} style={styles.headerSubContainerImage}/>
            </View>
            <Text style={styles.title}>Reminder of the day</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.duration}>12pm to 3pm</Text>
            <View style={styles.bottomSubContainer}>
                <Image source={PLAY_BUTTON} style={styles.bottomSubContainerImage}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ASChallengeCard
