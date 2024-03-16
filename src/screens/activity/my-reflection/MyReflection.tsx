import React from 'react'
import { View } from 'react-native'

import { ASHeader } from '../../../components'
import { backGreenIcon } from '../../../constants'

const MyReflection = () => {
  return (
    <View>
      <ASHeader title="My Reflection" canGoBack={true} imgSrc={backGreenIcon} />
    </View>
  )
}

export default MyReflection
