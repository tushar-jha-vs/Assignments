import {View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {DActiveListType} from '../../types';
import {
  DActiveImageSource,
  DActiveTextColor,
  buttonGradientColor,
  buttonsText,
  textGradientColor,
} from '../../constants';

import CustomButton from '../custom-button/CustomButton';

import {styles} from './dActiveCard-styles';
const DActiveCard = ({item}: {item: DActiveListType}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={DActiveImageSource[item.title]}>
        <LinearGradient
          colors={textGradientColor}
          locations={[0, 0.8792, 1]}
          style={styles.textContainer}>
          <Text style={[styles.title, {color: DActiveTextColor[item.title]}]}>
            {item.title}
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={buttonGradientColor}
          locations={[0, 0.5]}
          style={styles.buttonContainer}>
          {buttonsText.map((item, idx) => (
            <CustomButton key={idx} item={item} />
          ))}
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default DActiveCard;
