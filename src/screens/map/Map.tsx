import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ASHeader from '../../components/header/ASHeader'
import { styles } from './map-styles'
import ASAffectedAreas from '../../components/affected-areas/ASAffectedAreas'
import ASTopCountries from '../../components/top-countries/ASTopCountries'

const Map = () => {
  return (
    <ScrollView style={styles.container} scrollEnabled>
      <ASHeader title="World Wide Map" />
      <ASAffectedAreas />
      <ASTopCountries />
    </ScrollView>
  )
}

export default Map
