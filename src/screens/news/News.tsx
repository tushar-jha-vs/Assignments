import React from 'react'
import { View } from 'react-native'
import WebView from 'react-native-webview'

import { ASHeader } from '../../components'

import { NEWS_WEBVIEW_URI } from '../../constants'

import { styles } from '../home/home-styles'

const News = () => {
  return (
    <>
      <ASHeader title="News" />
      <View style={styles.container}>
        <WebView
          source={{
            uri: NEWS_WEBVIEW_URI,
          }}
        />
      </View>
    </>
  )
}

export default News
