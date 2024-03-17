import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import { backWhiteIcon } from '../../../constants'

import ASDayReflection from '../../../components/day-reflection/ASDayReflection'
import { ASHeader } from '../../../components'

import { styles } from './dailyReflection-styles'

const DailyReflection = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <ASHeader title={'Day 1'} imgSrc={backWhiteIcon} />
      <ASDayReflection />
    </SafeAreaView>
  )
}

export default DailyReflection
