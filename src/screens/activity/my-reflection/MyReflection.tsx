import React, { useEffect } from 'react'
import { ImageBackground, FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'

import { ASHeader, ASLoader, ASMyReflectionCard } from '../../../components'
import { RootState, useAppDispatch } from '../../../redux/store'
import { fetchReflectionsListData } from '../../../redux/features/reflections-slice'

import { MY_REFLECTIONS_BACKGROUND_IMAGE,ResizeMode, backGreenIcon } from '../../../constants'

import { styles } from './myReflection-styles'

const MyReflection = () => {
  const { reflectionList } = useSelector((state: RootState) => state.reflection)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchReflectionsListData())
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground
        source={MY_REFLECTIONS_BACKGROUND_IMAGE}
        resizeMode={ResizeMode.Stretch}
        style={styles.bgImage}>
        <ASHeader title="My Reflection" canGoBack={true} imageSrc={backGreenIcon} />
        <View style={styles.subContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <ASLoader />}
            data={reflectionList}
            renderItem={({ item }) => <ASMyReflectionCard date={item.date} title={item.title} />}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

export default MyReflection
