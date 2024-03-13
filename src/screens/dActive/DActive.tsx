import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import { IDActiveCardProps } from '../../types'
import { DACTIVE_BASE_URL } from '../../constants'
import { Header, DActiveCard } from '../../components'
import { getListData } from '../../services'

import { styles } from './dActive-styles'

const DActive = () => {
  const [dActiveList, setDActiveList] = useState<IDActiveCardProps[]>([])
  const getDActiveListData = async () => {
    const res = await getListData(DACTIVE_BASE_URL)
    if (res.success) {
      setDActiveList(res.data)
    } else {
      console.error(res.error)
    }
  }
  useEffect(() => {
    getDActiveListData()
  }, [])

  return (
    <View style={styles.container}>
      <Header title="D Active" />
      <FlatList
        style={styles.subContainer}
        data={dActiveList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <DActiveCard item={item} />}
        keyExtractor={item => String(item.id)}
      />
    </View>
  )
}

export default DActive
