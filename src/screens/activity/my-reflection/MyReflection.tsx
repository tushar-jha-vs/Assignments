import React, { useEffect } from 'react'
import { ImageBackground, FlatList, Text, View, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'

import { ASHeader, ASMyReflectionCard } from '../../../components'
import { MY_REFLECTIONS_BACKGROUND_IMAGE, ResizeMode, backGreenIcon } from '../../../constants'
import { RootState, useAppDispatch } from '../../../redux/store'
import { fetchReflectionsListData } from '../../../redux/features/reflections-slice'

import { styles } from './myReflection-styles'

const MyReflection = () => {
  const myReflectionsList = useSelector((state: RootState) => state.reflection.reflectionList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchReflectionsListData())
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={MY_REFLECTIONS_BACKGROUND_IMAGE}
        resizeMode={ResizeMode.Stretch}
        style={styles.bgImage}>
        <ASHeader title="My Reflection" canGoBack={true} imgSrc={backGreenIcon} />
        <View style={styles.subContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <Text>Loading...</Text>}
            data={myReflectionsList}
            renderItem={({ item }) => <ASMyReflectionCard date={item.date} title={item.title} />}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default MyReflection
