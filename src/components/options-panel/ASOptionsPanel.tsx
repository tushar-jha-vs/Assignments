import React, { Dispatch, SetStateAction } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { COLORS } from '../../theme'

import { styles } from './asOptionalPanel-styles'

interface IASOptionsPanelProps {
  activeButton: string
  setActiveButton: Dispatch<SetStateAction<string>>
}
const ASOptionsPanel = (props: IASOptionsPanelProps) => {
  const { activeButton, setActiveButton } = props

  const renderButton = (buttonName: string, label: string) => {
    const isActive = buttonName === activeButton
    const buttonBackgroundColor = isActive ? COLORS.primary[500] : COLORS.white
    const labelColor = isActive ? COLORS.white : COLORS.primary[500]

    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
        onPress={() => setActiveButton(buttonName)}>
        <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      {renderButton('Progress', 'Progress')}
      {renderButton('Assessment', 'Assessment')}
    </View>
  )
}
export default ASOptionsPanel
