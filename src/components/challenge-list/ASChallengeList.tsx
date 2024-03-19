import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import { ASLoader } from '..'
import { RootState, useAppDispatch } from '../../redux/store'
import { fetchDashboardListData } from '../../redux/features/dashboard-slice'
import ASChallengeCard from '../challenge-card/ASChallengeCard'

import { styles } from './asChallengeList-styles'

const ASChallengeList = () => {
  const dashboardChallengesList = useSelector(
    (state: RootState) => state.dashboard.dashboardChallengesList,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDashboardListData())
  }, [])

  return (
    <FlatList
      style={styles.container}
      ListEmptyComponent={() => <ASLoader />}
      data={dashboardChallengesList}
      scrollEnabled
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <ASChallengeCard {...item} />}
    />
  )
}

export default ASChallengeList
