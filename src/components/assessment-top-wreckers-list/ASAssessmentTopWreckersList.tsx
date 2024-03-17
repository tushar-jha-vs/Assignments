import React, { useEffect, useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import WebView from 'react-native-webview'

import {
  ASSESSMENT_SCREEN_IMAGE,
  ResizeMode,
  PROGRESS_LIST_BASE_URL,
  ASSESSMENT_IMAGE_TITLE,
  WEBVIEW_ALL_WRECKER_URI,
} from '../../constants'
import { IProgressProps } from '../../types'
import { getListDataFromURL } from '../../services'

import ASAssessmentTopWreckerCard from '../assessment-top-wrecker-card/ASAssessmentTopWreckerCard'

import { styles } from './asAssessmentTopWreckersList-styles'

const ASAssessmentTopWreckersList = () => {
  const [wreckersList, setWreckersList] = useState<IProgressProps[]>([])
  const [webViewVisible, setWebViewVisible] = useState<boolean>(false)
  const getAllWreckersData = async () => {
    const res = await getListDataFromURL(PROGRESS_LIST_BASE_URL)
    if (res.success) {
      setWreckersList(res.data)
    } else {
      console.error(res.error)
    }
  }
  useEffect(() => {
    getAllWreckersData()
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
