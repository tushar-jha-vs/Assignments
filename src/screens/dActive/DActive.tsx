import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { HeaderTitle, backGreenIcon } from '../../constants'
import { ASHeader, ASDActiveCard } from '../../components'

import { RootState, useAppDispatch } from '../../redux/store'
import { fetchDActiveListData } from '../../redux/features/dActive-slice'

import { styles } from './dActive-styles'

const DActive = () => {
  const dActiveList = useSelector((state: RootState) => state.dActive.dActiveList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDActiveListData())
  }, [])

  return (
    <View style={styles.container}>
      <ASHeader title={HeaderTitle.DActive} imgSrc={backGreenIcon} />
      <FlatList
        style={styles.subContainer}
        data={dActiveList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>Loading..</Text>}
        renderItem={({ item }) => <ASDActiveCard {...item} />}
        keyExtractor={item => String(item.id)}
      />
    </View>
  )
}

export default DActive
