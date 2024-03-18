import React, { useEffect, useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import WebView from 'react-native-webview'
import { useSelector } from 'react-redux'

import {
  ASSESSMENT_SCREEN_IMAGE,
  ResizeMode,
  ASSESSMENT_IMAGE_TITLE,
  WEBVIEW_ALL_WRECKER_URI,
} from '../../constants'
import { RootState, useAppDispatch } from '../../redux/store'
import { fetchWreckersListData } from '../../redux/features/wreckers-slice'

import ASAssessmentTopWreckerCard from '../assessment-top-wrecker-card/ASAssessmentTopWreckerCard'

import { styles } from './asAssessmentTopWreckersList-styles'

const ASAssessmentTopWreckersList = () => {
  const wreckersList = useSelector((state: RootState) => state.wreckers.wreckersList)
  const [webViewVisible, setWebViewVisible] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWreckersListData())
  }, [])
  const renderWreckersCards = () => {
    const TopThreeWreckers = wreckersList.slice(0, 3)
    return TopThreeWreckers.map((item, index) => (
      <ASAssessmentTopWreckerCard key={index} {...item} />
    ))
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.subContainerTitle}>Your Top Wreckers</Text>
        <View style={styles.detailContainer}>{renderWreckersCards()}</View>
      </View>
      <TouchableOpacity style={styles.bottomContainer} onPress={() => setWebViewVisible(true)}>
        <Modal
          visible={webViewVisible}
          animationType="slide"
          onRequestClose={() => setWebViewVisible(false)}
          transparent={true}>
          <WebView
            source={{
              uri: WEBVIEW_ALL_WRECKER_URI,
            }}
          />
        </Modal>
        <Text style={styles.bottomContainerTitle}>View All Wreckers</Text>
        <Image
          source={ASSESSMENT_SCREEN_IMAGE[ASSESSMENT_IMAGE_TITLE.Link]}
          resizeMode={ResizeMode.Contain}
          style={styles.bottomContainerImage}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ASAssessmentTopWreckersList
