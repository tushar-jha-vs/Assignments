import React from 'react'
import { SafeAreaView } from 'react-native'

import { backWhiteIcon } from '../../../constants'
import { ASDayReflection } from '../../../components'
import { ASHeader } from '../../../components'
import { COLORS } from '../../../theme'

import { styles } from './dailyReflection-styles'

const DailyReflection = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ASHeader
        title="Day 1"
        titleColor={COLORS.white}
        bgColor={COLORS.primary[800]}
        canGoBack={true}
        imgSrc={backWhiteIcon}
      />
      <ASDayReflection />
    </SafeAreaView>
  )
}

export default DailyReflection
