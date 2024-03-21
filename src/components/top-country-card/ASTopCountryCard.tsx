import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Circle } from 'react-native-progress'

import { COLORS, SPACING } from '../../theme'
import { ICountryData as IASTopCountryCardProps } from '../../types'
import { getColorForPercentage } from '../../utils'

import { styles } from './asTopCountryCard-styles'

const ASTopCountryCard = (props: IASTopCountryCardProps) => {
  const { country, active, cases, population, recovered } = props
  const percent = (cases / population) * 100
  return (
    <View style={styles.container}>
      <Circle
        size={SPACING.space_76}
        progress={percent / 100}
        unfilledColor={COLORS.neutral['00']}
        thickness={SPACING.space_8}
        strokeCap="round"
        borderColor={COLORS.white}
        color={getColorForPercentage(Math.floor(percent))}
        showsText={true}
        formatText={() => `${Math.floor(percent)}%`}
        textStyle={styles.progressCircle}
      />
      <View style={styles.subContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.countryTitle}>{country}</Text>
          <Text style={styles.stats}>Affected - {active / 1000}k</Text>
          <Text style={styles.stats}>Recovered - {recovered / 1000}k</Text>
        </View>
        <Icon
          name="bell"
          size={SPACING.space_24}
          color={Math.floor(percent) > SPACING.space_50 ? COLORS.failure : COLORS.success[50]}
        />
      </View>
    </View>
  )
}

export default ASTopCountryCard
