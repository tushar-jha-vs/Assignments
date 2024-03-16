import React, { useEffect, useState } from 'react'
import { View, FlatList, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

import { ASProgressListCard } from '../../../components'
import { RootStackParamList, IProgressProps } from '../../../types'
import { getListDataFromURL } from '../../../services'
import { PROGRESS_LIST_BASE_URL } from '../../../constants'

import { styles } from './progress-styles'

const Progress = () => {
  const [progressList, setProgressList] = useState<IProgressProps[]>([])
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const getProgressListData = async () => {
    const res = await getListDataFromURL(PROGRESS_LIST_BASE_URL)
    if (res.success) {
      setProgressList(res.data)
    } else {
      console.error(res.error)
    }
  }
  useEffect(() => {
    getProgressListData()
  }, [])

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>Loading...</Text>}
        data={progressList}
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
