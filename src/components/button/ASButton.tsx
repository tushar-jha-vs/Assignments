import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './asButton-styles'

interface IASButtonProps {
  label: string
  onPress?: () => void
}
const ASButton = (props: IASButtonProps) => {
  const { label, onPress } = props
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default ASButton
