import React, { useEffect, useState } from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { ASSESSMENT_SCREEN_IMAGE, ResizeMode, ASSESSMENT_IMAGE_TITLE } from '../../constants'
import { RootState, useAppDispatch } from '../../redux/store'
import { fetchWreckersListData } from '../../redux/features/wreckers-slice'
import { ASAssessmentTopWreckerCard } from '..'

import { styles } from './asAssessmentTopWreckersList-styles'

const ASAssessmentTopWreckersList = () => {
  const wreckersList = useSelector((state: RootState) => state.wreckers.wreckersList)
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
      <TouchableOpacity
        style={styles.bottomContainer}
        onPress={() => Alert.alert('Coming Soon...')}>
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
