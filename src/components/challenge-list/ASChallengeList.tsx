import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { FlatList, Text } from 'react-native'
import ASChallengeCard from '../challenge-card/ASChallengeCard'
import { styles } from './asChallengeList-styles'

import { RootStackParamList, IDashboardProps } from '../../types'

import { getListDataFromURL } from '../../services'
import { DASHBOARD_BASE_URL } from '../../constants'

const ASChallengeList = () => {
  const [challengesList, setChallengesList] = useState<IDashboardProps[]>([])
  // const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const getAllWreckersData = async () => {
    const res = await getListDataFromURL(DASHBOARD_BASE_URL)
    if (res.success) {
      setChallengesList(res.data)
    } else {
      console.error(res.error)
    }
  }
  useEffect(() => {
    getAllWreckersData()
  }, [])
  
  return (
    <FlatList
        data={challengesList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ASChallengeCard {...item} />}
        ListEmptyComponent={() => <Text>Loading...</Text>}
        scrollEnabled
        style={styles.container}
      />
  )
}

export default ASChallengeList
