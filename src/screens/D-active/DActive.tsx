import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

import {DActiveListType} from '../../types';
import {DACTIVE_BASE_URL} from '../../constants';

import DActiceCard from '../../components/d-active-card/DActiveCard';

import {styles} from './dActive-styles';

const DActive = () => {
  const [dActiveList, setDActiveList] = useState<DActiveListType[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(DACTIVE_BASE_URL);
        const data = await response.json();
        setDActiveList(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <>
      <View style={styles.header}>
        <View style={styles.icon} />
        <Text style={styles.title}>D-active</Text>
        <View style={styles.icon} />
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
