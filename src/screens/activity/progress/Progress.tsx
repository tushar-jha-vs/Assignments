import React, { useEffect } from 'react'
import { View, FlatList, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { ASProgressListCard } from '../../../components'
import { RootStackParamList, IProgressProps } from '../../../types'

import { styles } from './progress-styles'
import { RootState, useAppDispatch } from '../../../redux/store'
import { fetchWreckersListData } from '../../../redux/features/wreckers-slice'

const Progress = () => {
  const wreckersList = useSelector((state: RootState) => state.wreckers.wreckersList)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWreckersListData())
  }, [])

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>Loading...</Text>}
        data={wreckersList}
        renderItem={({ item }) => <ASProgressListCard {...item} />}
      />
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          source={require('../../../assets/images/all-reflections.png')}>
          <TouchableOpacity
            style={styles.reflectionsButton}
            onPress={() => navigation.navigate('My Reflection')}>
            <Text style={styles.label}>View All Reflections</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  )
}

export default Progress
