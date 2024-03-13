import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './asButton-styles'

interface IASButtonProps {
  buttonText: string
  onPress?: () => void
}
const ASButton = (props: IASButtonProps) => {
  const { buttonText,onPress } = props
  return (
    <TouchableOpacity style={styles.asButton} onPress={onPress}>
      <Text style={styles.label}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default ASButton
