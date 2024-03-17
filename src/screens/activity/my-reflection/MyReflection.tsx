import React, { useEffect, useState } from 'react'
import { ImageBackground, FlatList, Text, View } from 'react-native'

import { ASHeader, ASMyReflectionCard } from '../../../components'
import {MY_REFLECTIONS_BACKGROUND_IMAGE,MY_REFLECTIONS_BASE_URL,backGreenIcon} from '../../../constants'
import { IMyReflectionsProps } from '../../../types'
import { getListDataFromURL } from '../../../services'

import { styles } from './myReflection-styles'

const MyReflection = () => {
  const [myReflectionsList, setMyReflectionsList] = useState<IMyReflectionsProps[]>([])

  const getMyReflectionsListData = async () => {
    const res = await getListDataFromURL(MY_REFLECTIONS_BASE_URL)
    if (res.success) {
      setMyReflectionsList(res.data)
    } else {
      console.error(res.error)
    }
  }
  useEffect(() => {
    getMyReflectionsListData()
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
        />
      </View>
    </ImageBackground>
  )
}

export default MyReflection
