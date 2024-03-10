// 3rd party libraries
import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

// Absolute imports
import {styles} from './dActive-styles';
import {COLORS} from '../../theme/theme';
import {DActiveListType} from '../../types/notification-type';
import DActiceCard from '../../components/d-active-card/DActiceCard';

const dActiveList: DActiveListType[] = [
  {
    id: 1,
    bgImage: require('../../assets/images/outer-ring.png'),
    textColor: COLORS.secondary600,
    title: 'Outer Ring',
  },
  {
    id: 2,
    bgImage: require('../../assets/images/focus.png'),
    textColor: COLORS.primary700,
    title: 'Focus',
  },
  {
    id: 3,
    bgImage: require('../../assets/images/follow.png'),
    textColor: COLORS.neutral600,
    title: 'Follow',
  },
  {
    id: 4,
    bgImage: require('../../assets/images/scan.png'),
    textColor: COLORS.accent700,
    title: 'Scan',
  },
  {
    id: 5,
    bgImage: require('../../assets/images/square.png'),
    textColor: COLORS.primary700,
    title: 'Square',
  },
  {
    id: 6,
    bgImage: require('../../assets/images/outer-ring.png'),
    textColor: COLORS.secondary600,
    title: 'Outer Ring',
  },
  {
    id: 7,
    bgImage: require('../../assets/images/focus.png'),
    textColor: COLORS.primary700,
    title: 'Focus',
  },
  {
    id: 8,
    bgImage: require('../../assets/images/follow.png'),
    textColor: COLORS.neutral600,
    title: 'Follow',
  },
  {
    id: 9,
    bgImage: require('../../assets/images/scan.png'),
    textColor: COLORS.accent700,
    title: 'Scan',
  },
  {
    id: 10,
    bgImage: require('../../assets/images/square.png'),
    textColor: COLORS.primary700,
    title: 'Square',
  },
];

const DActive = () => {
  return (
    <>
      <View style={styles.header}>
        <Image style={styles.icon} />
        <Text style={styles.title}>D-active</Text>
        <Image style={styles.icon} />
      </View>
      <FlatList
        style={styles.subContainer}
        data={dActiveList}
        renderItem={({item}) => <DActiceCard item={item} />}
      />
    </>
  );
};

export default DActive;
