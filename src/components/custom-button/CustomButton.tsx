import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './customButton-styles'

interface ICustomButtonProps {
  buttonText: string
}
const CustomButton = (props: ICustomButtonProps) => {
  const { buttonText } = props
  return (
    <TouchableOpacity style={styles.customButton}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
