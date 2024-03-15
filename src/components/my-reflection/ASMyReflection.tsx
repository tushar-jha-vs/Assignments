import { View, Text, Image } from 'react-native'
import React from 'react'
import { nextIcon } from '../../constants/profile-constants';

const ASMyReflection = () => {
  return (
    <View>
      <Text>5 Nov, 23</Text>
      <View>
        <Text>Curiosity</Text>
        <Image source={nextIcon} />
      </View>
    </View>
  )
}

export default ASMyReflection;