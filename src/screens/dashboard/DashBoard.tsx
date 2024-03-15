import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { ResizeMode } from '../../constants'
import { getCurrentDate } from '../../utils'
import ASChallengeList from '../../components/challenge-list/ASChallengeList'
import { styles } from './dashboard-styles'
import ASDashboardHeader from '../../components/dashboard-header/ASDashboardHeader'
import ASDashboardCard from '../../components/dashboard-card/ASDashboardCard'

const calendar = require('../../assets/icons/calendar.png')

const DashBoard = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View>
        <Image source={calendar} resizeMode={ResizeMode.Contain}/>
        <Text>{getCurrentDate()}</Text>
      </View>
      <View>
        <Text>Overthinker</Text>
        <Text>Day 1 of 24</Text>
      </View>
      <View>
        <Image />
        <View>
          <View>
            <View>
              <View>
                <Text></Text>
                <Image />
              </View>
              <Image />
            </View>
            <Text></Text>
          </View>
          <View>
            <Text></Text>
            <Image />
          </View>
        </View>
      </View> */}
      <ASDashboardHeader/>
      <ASDashboardCard/>
      <ASChallengeList/>
    </SafeAreaView>
  )
}

export default DashBoard
