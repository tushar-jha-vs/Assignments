import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import ASChallengeList from '../../components/challenge-list/ASChallengeList'
import ASDashboardCard from '../../components/dashboard-card/ASDashboardCard'
import ASDashboardHeader from '../../components/dashboard-header/ASDashboardHeader'

import { styles } from './dashboard-styles'

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <ASDashboardHeader />
      <ASDashboardCard />
      <ASChallengeList />
    </SafeAreaView>
  )
}

export default Dashboard
