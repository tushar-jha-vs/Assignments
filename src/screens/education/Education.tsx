import React from 'react'
import { View } from 'react-native'
import WebView from 'react-native-webview'

import { ASHeader } from '../../components'

import { EDUCATION_WEBVIEW_URI } from '../../constants'

import { styles } from './education-styles'

const Education = () => {
  return (
    <>
      <ASHeader title="Education" />
      <View style={styles.container}>
        <WebView
          source={{
            uri: EDUCATION_WEBVIEW_URI,
          }}
        />
      </View>
    </>
  )
}

export default Education
