import { View, Text, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { IDActiveCardProps } from '../../types'
import { DActiveCardInfo, buttonsText } from '../../constants'
import { COLORS } from '../../theme'
import {CustomButton} from '../../components'

import { styles } from './dActiveCard-styles'

const DActiveCard = ({ item }: { item: IDActiveCardProps }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={DActiveCardInfo[item.title].imageSource}>
        <LinearGradient
          colors={COLORS.dActiveTextGradient}
          locations={[0, 0.8792, 1]}
          style={styles.textContainer}>
          <Text style={[styles.title, { color: DActiveCardInfo[item.title].textColor }]}>
            {item.title}
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={COLORS.dActiveButtonGradient}
          locations={[0, 0.5]}
          style={styles.buttonContainer}>
          {buttonsText.map((item, idx) => (
            <CustomButton key={idx} buttonText={item} />
          ))}
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default DActiveCard
