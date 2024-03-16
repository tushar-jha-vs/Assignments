import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './asChallengeCard-styles'
import { CHALLENGE_IMAGE_SOURCE,CHALLENGE_CARD_COLOR } from '../../constants'

const PLAY_BUTTON = require('../../assets/icons/audio.png')
const COMPLETED_TICK = require('../../assets/icons/complete.png')
const BOOKMARK = require('../../assets/icons/marked-favourite.png')
const REMOVE_BOOKMARK = require('../../assets/icons/not-marked-favourite.png')

interface IASDashboardListCardProps {
  id:string
  title: string
  isFav: string
  startingTime: string
  endingTime: string
  isCompleted: string
}

const ASChallengeCard = (props:IASDashboardListCardProps) => {
  const {id,title,isFav,startingTime,endingTime,isCompleted} = props
  return (
    <View style={[styles.container,{backgroundColor:CHALLENGE_CARD_COLOR[id]}]}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
            <Image source={CHALLENGE_IMAGE_SOURCE[id]} style={styles.image} />
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerSubContainer}>
              <View style={styles.headerSubContainerContent}>
                <Text style={styles.headerSubContainerContentTitle}>Challenge {id}</Text>
                {isCompleted==="true"?<Image source={COMPLETED_TICK} style={styles.headerSubContainerContentImage}/>:null}
              </View>
              <Image source={isFav==="true"?BOOKMARK:REMOVE_BOOKMARK} style={styles.headerSubContainerImage}/>
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.duration}>{startingTime} to {endingTime}</Text>
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
