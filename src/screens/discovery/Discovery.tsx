import React from 'react'
import { View } from 'react-native'
import WebView from 'react-native-webview'

import { ASHeader } from '../../components'

import { GOOGLE_MAP_URI } from '../../constants'

import { styles } from './discovery-styles'

const Discovery = () => {
  return (
    <>
      <ASHeader title="Discovery" />
      <View style={styles.container}>
        <WebView
          source={{
            uri: GOOGLE_MAP_URI,
          }}
        />
      </View>
    </>
  )
}

export default Discovery
