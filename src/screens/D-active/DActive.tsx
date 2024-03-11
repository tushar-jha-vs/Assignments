// 3rd party libraries
import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';

// Absolute imports
import {styles} from './dActive-styles';
import DActiceCard from '../../components/d-active-card/DActiceCard';
import {DActiveListType} from '../../types/notification-type';

const DActive = () => {
  const [dActiveList, setDActiveList] = useState<DActiveListType[]>([]);
  useEffect(() => {
    const fetchDActiveListData = async () => {
      try {
        const response = await fetch(
          'https://tushar-jha-vs.github.io/api/dActive.json',
        );
        const data = await response.json();
        setDActiveList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDActiveListData();
  }, []);
  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/empty.png')}
        />
        <Text style={styles.title}>D-active</Text>
        <Image
          style={styles.icon}
          source={require('../../assets/images/empty.png')}
        />
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
