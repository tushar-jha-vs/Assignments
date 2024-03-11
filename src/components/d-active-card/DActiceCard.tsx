import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {DActiveListType} from '../../types/notification-type';
import {COLORS} from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './dActiveCard-styles';

const imagePaths: {[key: string]: number} = {
  'Outer Ring': require('../../assets/images/outer-ring.png'),
  "Focus": require('../../assets/images/focus.png'),
  "Follow": require('../../assets/images/follow.png'),
  "Scan": require('../../assets/images/scan.png'),
  "Square": require('../../assets/images/square.png'),
};

const DActiceCard = ({item}: {item: DActiveListType}) => {
  function getImageText(title: string) {
    switch (title) {
      case 'Focus':
        return COLORS.primary700;
      case 'Follow':
        return COLORS.neutral600;
      case 'Scan':
        return COLORS.accent700;
      case 'Outer Ring':
        return COLORS.secondary600;
      case 'Square':
        return COLORS.primary700;
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={imagePaths[item.title]}>
        <LinearGradient
          colors={[
            'rgba(255,255,255,0.56)',
            'rgba(255,255,255,0.12)',
            'rgba(255,255,255,0)',
          ]}
          locations={[0, 0.8792, 1]}
          style={styles.textContainer}>
          <Text style={[styles.title, {color: getImageText(item.title)}]}>
            {item.title}
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.8)']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text>2min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>4min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>8min</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default DActiceCard;
