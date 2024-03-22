import React from 'react'
import { View, Text } from 'react-native'

import { SPACING } from '../../theme'
import { WorldMap } from '../../assets'

import { styles } from './asAffectedAreas-styles'

const ASAffectedAreas = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.label}>Covid Affected Areas</Text>
        <View style={styles.affectedLabelsContainer}>
          <View style={styles.affected}>
            <View style={styles.mostAffectedContainer} />
            <Text style={styles.affectedLabel}>Most Affected</Text>
          </View>
          <View style={styles.affected}>
            <View style={styles.leastAffectedContainer} />
            <Text style={styles.affectedLabel}>Least Affected</Text>
          </View>
        </View>
        <View style={styles.mapImage}>
          <WorldMap height={SPACING.space_325} width={SPACING.space_325} />
        </View>
      </View>
    </View>
  )
}

export default ASAffectedAreas
