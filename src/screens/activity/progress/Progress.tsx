import React, { useEffect } from 'react'
import { View, FlatList, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { ASProgressListCard } from '../../../components'
import { RootStackParamList } from '../../../types'
import { RootState, useAppDispatch } from '../../../redux/store'
import { fetchWreckersListData } from '../../../redux/features/wreckers-slice'

import { styles } from './progress-styles'

const Progress = () => {
  const wreckersList = useSelector((state: RootState) => state.wreckers.wreckersList)
  const isLoading = useSelector((state: RootState) => state.wreckers.isLoading)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWreckersListData())
  }, [])

  return (
    <View style={styles.mainContainer}>
      {!isLoading ? (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
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
        </>
      ) : (
        <Text>Loading..</Text>
      )}
    </View>
  )
}

export default Progress
