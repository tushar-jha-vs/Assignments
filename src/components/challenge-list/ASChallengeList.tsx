import React from 'react'
import { FlatList,ListRenderItem, ScrollView } from 'react-native'
import ASChallengeCard from '../challenge-card/ASChallengeCard'
import { styles } from './asChallengeList-styles'
const ASChallengeList = () => {
    const renderItem: ListRenderItem<any> = ({ item }) => <ASChallengeCard data={item} />
  return (
    <FlatList
        ListEmptyComponent={
          <ScrollView>
            <ASChallengeCard/>
            <ASChallengeCard/>
            <ASChallengeCard/>
            <ASChallengeCard/>
            <ASChallengeCard/>
          </ScrollView>
        }
        data={[]}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        scrollEnabled
        style={styles.container}
      />
  )
}

export default ASChallengeList
