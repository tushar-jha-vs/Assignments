import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ResizeMode } from '../../constants'
import { Bar } from 'react-native-progress'
import { styles } from './asAssessmentTopWreckersCard-styles'
import { COLORS } from '../../theme'

const PROCRASTINATOR = require('../../assets/icons/procrastinator.png')
const LINK = require('../../assets/icons/link.png')
const ASAssessmentTopWreckersCard = () => {
  const renderWreckersCards = () => {
    const wreckerData = [1, 2, 3]
    return wreckerData.map((item) => (
      <View style={styles.detailSubContainer} key={item}>
        <Image
          source={PROCRASTINATOR}
          resizeMode={ResizeMode.Contain}
          style={styles.detailSubContainerImage}
        />
        <View style={styles.detailSubContainerFooter}>
          <View style={styles.detailSubContainerFooterProgress}>
            <Text style={styles.detailSubContainerFooterProgressTitle}>80%</Text>
            <Bar progress={0.8} borderRadius={2} height={12} width={51} unfilledColor={COLORS.secondary['300']} color={COLORS.secondary['500']}/>
          </View>
          <Text style={styles.detailSubContainerFooterTitle}>Procrastinator</Text>
        </View>
      </View>
    ))
  }
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.subContainerTitle}>Your Top Wreckers</Text>
        <View style={styles.detailContainer}>{renderWreckersCards()}</View>
      </View>
      <TouchableOpacity style={styles.bottomContainer}>
        <Text style={styles.bottomContainerTitle}>View All Wreckers</Text>
        <Image source={LINK} resizeMode={ResizeMode.Contain} style={styles.bottomContainerImage} />
      </TouchableOpacity>
    </View>
  )
}

export default ASAssessmentTopWreckersCard
