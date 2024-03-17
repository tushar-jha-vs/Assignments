import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import { ASChallengeList, ASDashboardCard, ASDashboardHeader } from '../../components'

import { styles } from './dashboard-styles'

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ASDashboardHeader />
      <ASDashboardCard />
      <ASChallengeList />
    </SafeAreaView>
  )
}

export default Dashboard
