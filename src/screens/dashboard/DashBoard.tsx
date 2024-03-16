import { SafeAreaView } from 'react-native'
import React from 'react'
import ASDashboardHeader from '../../components/dashboard-header/ASDashboardHeader'
import ASDashboardCard from '../../components/dashboard-card/ASDashboardCard'
import ASChallengeList from '../../components/challenge-list/ASChallengeList'

const Dashboard = () => {
  return (
    <SafeAreaView>
      <ASDashboardHeader/>
      <ASDashboardCard/>
      <ASChallengeList/>
    </SafeAreaView>
  )
}

export default Dashboard
