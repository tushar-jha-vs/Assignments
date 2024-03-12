import {Image, Text, View} from 'react-native';

import {notificationIcon} from '../../constants';

import {styles} from './NoData-styles';

const NoData = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={notificationIcon}
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

export default NoData;
