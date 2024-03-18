import React, { useEffect } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'

import { HeaderTitle, backGreenIcon } from '../../constants'
import { ASHeader, ASDActiveCard, ASLoader } from '../../components'
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
    <SafeAreaView style={styles.container}>
      <ASHeader title={HeaderTitle.DActive} imgSrc={backGreenIcon} />
      <FlatList
        style={styles.subContainer}
        data={dActiveList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ASLoader />}
        renderItem={({ item }) => <ASDActiveCard {...item} />}
        keyExtractor={item => String(item.id)}
      />
    </SafeAreaView>
  )
}

export default DActive
