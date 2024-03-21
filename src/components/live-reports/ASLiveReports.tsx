import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { COLORS, SPACING } from '../../theme'

import { styles } from './asLiveReport-styles'

interface IASLiveReportsProps {
  page: number
  handlePrev: () => void
  handleNext: () => void
}
const ASLiveReports = (props: IASLiveReportsProps) => {
  const { handleNext, handlePrev, page } = props
  return (
    <View style={styles.container}>
      <View style={styles.reportsContainer}>
        <View>
          <Text style={styles.reportLabel}>Live reports</Text>
          <Text style={styles.countriesListLabel}>List of countries</Text>
        </View>
        <View style={styles.paginationContainer}>
          <TouchableOpacity style={styles.arrowSubContainer} onPress={handlePrev}>
            <Icon
              name="arrow-left"
              color={page === SPACING.space_1 ? COLORS.neutral['00'] : COLORS.neutral['100']}
              size={SPACING.space_8}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowSubContainer} onPress={handleNext}>
            <Icon name="arrow-right" color={COLORS.neutral['100']} size={SPACING.space_8} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ASLiveReports
