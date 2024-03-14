import { View, Text, ImageBackground, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { IASDActiveCardProps } from '../../types'
import { D_ACTIVE_CARD_INFO, BUTTONS_TEXT_DATA } from '../../constants'
import { COLORS } from '../../theme'
import { CustomButton } from '..'

import { styles } from './asDActiveCard-styles'

const ASDActiveCard = (props: IASDActiveCardProps) => {
  const { title } = props
  const renderDActiveButtons = () => {
    return BUTTONS_TEXT_DATA.map((item, index) => (
      <CustomButton key={index} label={item} onPress={() => Alert.alert('Button Pressed')} />
    ))
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={D_ACTIVE_CARD_INFO[title].imageSource}>
        <LinearGradient
          colors={COLORS.dActiveTextGradient}
          locations={[0, 0.8792, 1]}
          style={styles.textContainer}>
          <Text style={[styles.title, { color: D_ACTIVE_CARD_INFO[title].textColor }]}>
            {title}
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={COLORS.dActiveButtonGradient}
          locations={[0, 0.7]}
          style={styles.buttonContainer}>
          {renderDActiveButtons()}
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default ASDActiveCard
