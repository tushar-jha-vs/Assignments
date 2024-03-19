import React from 'react'
import { View } from 'react-native'

import { ASDayReflection } from '../../../components'
import { ASHeader } from '../../../components'
import { COLORS } from '../../../theme'

import { backWhiteIcon } from '../../../constants'

import { styles } from './dailyReflection-styles'

const DailyReflection = () => {
  return (
    <View style={styles.container}>
      <ASHeader
        title="Day 1"
        titleColor={COLORS.white}
        bgColor={COLORS.primary[800]}
        canGoBack={true}
        imageSrc={backWhiteIcon}
      />
      <ASDayReflection />
    </View>
  )
}

export default DailyReflection
