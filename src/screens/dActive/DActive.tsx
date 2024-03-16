import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import { IASDActiveCardProps } from '../../types'
import { DACTIVE_BASE_URL, HeaderTitle, backGreenIcon } from '../../constants'
import { ASHeader, ASDActiveCard } from '../../components'
import { getListDataFromURL } from '../../services'

import { styles } from './dActive-styles'

const DActive = () => {
  const [dActiveList, setDActiveList] = useState<IASDActiveCardProps[]>([])
  const getDActiveListData = async () => {
    const res = await getListDataFromURL(DACTIVE_BASE_URL)
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
      <ASHeader title={HeaderTitle.DActive} imgSrc={backGreenIcon} />
      <FlatList
        style={styles.subContainer}
        data={dActiveList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ASDActiveCard {...item} />}
        keyExtractor={item => String(item.id)}
      />
    </View>
  )
}

export default DActive
