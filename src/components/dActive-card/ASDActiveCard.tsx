import { View, Text, ImageBackground, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { IASDActiveCardProps } from '../../types'
import {
  BUTTON_GRADIENT_LOCATION,
  D_ACTIVE_CARD_INFO,
  TEXT_GRADIENT_LOCATION,
  buttonsText,
} from '../../constants'
import { COLORS } from '../../theme'
import { CustomButton } from '..'

import { styles } from './asDActiveCard-styles'

const ASDActiveCard = ({ item }: { item: IASDActiveCardProps }) => {
  const renderDActiveButtons = () => {
    return buttonsText.map((item, idx) => (
      <CustomButton key={idx} buttonText={item} onPress={() => Alert.alert('Button Pressed')} />
    ))
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={D_ACTIVE_CARD_INFO[item.title].imageSource}>
        <LinearGradient
          colors={COLORS.dActiveTextGradient}
          locations={TEXT_GRADIENT_LOCATION}
          style={styles.textContainer}>
          <Text style={[styles.title, { color: D_ACTIVE_CARD_INFO[item.title].textColor }]}>
            {item.title}
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={COLORS.dActiveButtonGradient}
          locations={BUTTON_GRADIENT_LOCATION}
          style={styles.buttonContainer}>
          {renderDActiveButtons()}
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default ASDActiveCard
