import {Image, Text, View} from 'react-native';
import {styles} from './NotificationNone-styles';

const EmptyNotification = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/icons/notification.png')}
        resizeMode="contain"
      />
      <View style={styles.subContainer}>
        <Text style={styles.text}>No Notification yet!</Text>
        <Text style={styles.subText}>
          You have no notifications right now.{'\n'}Come back later.
        </Text>
      </View>
    </View>
  );
};

export default EmptyNotification;
