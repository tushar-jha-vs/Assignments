import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { RootState, useAppDispatch } from '../../redux/store'
import { fetchCovstatsData } from '../../redux/features/covstatsData-slice'
import { ASTopCountryCard } from '..'

import { styles } from './asTopCountries-styles'

const ASTopCountries = () => {
  const { covstatsList } = useSelector((state: RootState) => state.covstats)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCovstatsData())
  }, [])

  const sortedCovstatsList = [...covstatsList].sort((countryData1, countryData2) => {
    const percentage1 = (countryData1.active / countryData1.cases) * 100
    const percentage2 = (countryData2.active / countryData2.cases) * 100
    return percentage2 - percentage1
  })

  const renderTopCountries = () => {
    return sortedCovstatsList
      .slice(0, 100)
      .map((item, index) => <ASTopCountryCard key={index} {...item} />)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Top Countries</Text>
      {renderTopCountries()}
    </View>
  )
}

export default ASTopCountries
