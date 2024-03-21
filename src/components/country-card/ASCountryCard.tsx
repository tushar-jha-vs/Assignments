import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { COLORS, SPACING } from '../../theme'
import { ICountryData as IASCountryCardProps } from '../../types'

import { ACTIVE_CASES_THRESHOLD } from '../../constants'

import { styles } from './asCountryCard-styles'

const ASCountryCard = (props: IASCountryCardProps) => {
  const { country, countryInfo, active } = props
  return (
    <View style={styles.container}>
      <View style={styles.country}>
        <Image
          style={styles.flagImage}
          source={{ uri: countryInfo.flag }}
          height={SPACING.space_36}
          width={SPACING.space_48}
        />
        <Text style={styles.countryName}>{country}</Text>
      </View>
      <View style={styles.casesContainer}>
        <Text style={styles.case}>{active}</Text>
        <Icon
          name={active > ACTIVE_CASES_THRESHOLD ? 'arrow-up' : 'arrow-down'}
          color={active > ACTIVE_CASES_THRESHOLD ? COLORS.failure : COLORS.success[50]}
          size={SPACING.space_16}
        />
      </View>
    </View>
  )
}

export default ASCountryCard
