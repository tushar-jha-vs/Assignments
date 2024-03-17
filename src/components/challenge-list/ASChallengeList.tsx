import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'

import { IDashboardProps } from '../../types'
import { getListDataFromURL } from '../../services'
import { DASHBOARD_BASE_URL } from '../../constants'

import ASChallengeCard from '../challenge-card/ASChallengeCard'

import { styles } from './asChallengeList-styles'

const ASChallengeList = () => {
  const [challengesList, setChallengesList] = useState<IDashboardProps[]>([])
  const getAllChallengesData = async () => {
    const res = await getListDataFromURL(DASHBOARD_BASE_URL)
    if (res.success) {
      setChallengesList(res.data)
    } else {
      console.error(res.error)
    }
  }
  useEffect(() => {
    getAllChallengesData()
  }, [])

  return (
    <FlatList
      ListEmptyComponent={() => <Text>Loading...</Text>}
      data={challengesList}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <ASChallengeCard {...item} />}
      scrollEnabled
      style={styles.container}
    />
  )
}

export default ASChallengeList
