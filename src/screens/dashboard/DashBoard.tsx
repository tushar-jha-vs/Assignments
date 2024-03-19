import React from 'react'
import { View } from 'react-native'

import { ASChallengeList, ASDashboardCard, ASDashboardHeader } from '../../components'

import { styles } from './dashboard-styles'

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <ASDashboardHeader />
      <ASDashboardCard />
      <ASChallengeList />
    </View>
  )
}

export default Dashboard
