import React, { useEffect } from 'react'
import { ImageBackground, FlatList, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { ASHeader, ASMyReflectionCard } from '../../../components'
import { RootState, useAppDispatch } from '../../../redux/store'
import { fetchReflectionsListData } from '../../../redux/features/reflections-slice'

import { MY_REFLECTIONS_BACKGROUND_IMAGE, backGreenIcon } from '../../../constants'

import { styles } from './myReflection-styles'

const MyReflection = () => {
  const myReflectionsList = useSelector((state: RootState) => state.reflection.reflectionList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchReflectionsListData())
  }, [])

  return (
    <ImageBackground source={MY_REFLECTIONS_BACKGROUND_IMAGE} style={styles.bgImage}>
      <ASHeader title="My Reflection" canGoBack={true} imgSrc={backGreenIcon} />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <Text>Loading...</Text>}
          data={myReflectionsList}
          renderItem={({ item }) => <ASMyReflectionCard date={item.date} title={item.title} />}
          keyExtractor={(index)=> index.toString()}
        />
      </View>
    </ImageBackground>
  )
}

export default MyReflection