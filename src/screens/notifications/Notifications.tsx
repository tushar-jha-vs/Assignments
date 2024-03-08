import {Image, Text, View} from 'react-native';
import {styles} from './notifications-styles';

const Notification = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.icon} />
      <Text style={styles.title}>Notification</Text>
      <Image
        style={styles.icon}
        resizeMode="contain"
        source={require('../../assets/icons/settings.png')}
      />
    </View>
  );
};

export default Notification;
