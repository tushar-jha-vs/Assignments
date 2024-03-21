import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import { useAppDispatch, RootState } from '../../redux/store'
import { fetchCovstatsData } from '../../redux/features/covstatsData-slice'
import { ASCountryCard, ASLiveReports, ASLoader, ASHeader } from '../../components'

import { styles } from './home-styles'

const Home = () => {
  const { covstatsList } = useSelector((state: RootState) => state.covstats)
  const dispatch = useAppDispatch()
  const [page, setPage] = useState<number>(1)
  const LIMIT = 6
  const covstatsListLength = covstatsList.length

  useEffect(() => {
    dispatch(fetchCovstatsData())
  }, [])
  const startIndex = (page - 1) * LIMIT

  const endIndex = Math.min(startIndex + Number(LIMIT), covstatsListLength)

  const paginatedCovstatsList = [...covstatsList].slice(startIndex, endIndex)

  const handlePrev = () => {
    if (page === 1) return
    setPage(page - 1)
  }
  const handleNext = () => {
    setPage(page === Math.ceil(covstatsListLength / LIMIT) ? 1 : page + 1)
  }
  return (
    <>
      <ASHeader title="COVID - 19" />
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <ASLiveReports page={page} handleNext={handleNext} handlePrev={handlePrev} />
          <FlatList
            data={paginatedCovstatsList}
            renderItem={({ item }) => <ASCountryCard {...item} />}
            ListEmptyComponent={() => <ASLoader />}
            keyExtractor={item => item.country}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  )
}

export default Home
