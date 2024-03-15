import React from 'react'
import { FlatList, Image, ListRenderItem, SafeAreaView, Text, View } from 'react-native'
import { ResizeMode } from '../../constants'
import { getCurrentDate } from '../../utils'

const calendar = require('../../assets/icons/calendar.png')

const DashBoard = () => {
  // const renderItem: ListRenderItem<any> = ({ item }) => <DActiveChallenge data={item} />
  return (
    <SafeAreaView>
      <View>
        <Image source={calendar} resizeMode={ResizeMode.Contain}/>
        <Text>{getCurrentDate()}</Text>
      </View>
      <View>
        <Text></Text>
        <Text></Text>
      </View>
      <View>
        <Image />
        <View>
          <View>
            <View>
              <View>
                <Text></Text>
                <Image />
              </View>
              <Image />
            </View>
            <Text></Text>
          </View>
          <View>
            <Text></Text>
            <Image />
          </View>
        </View>
      </View>
      {/* <FlatList
        ListEmptyComponent={}
        data={}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        scrollEnabled
      /> */}
    </SafeAreaView>
  )
}

export default DashBoard
