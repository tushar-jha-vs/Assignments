import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import { Bar } from 'react-native-progress'
import { COLORS } from '../../theme'
import { styles } from './asDayReflection'

const ASDayReflection = () => {
  const cards = [1, 2, 3, 4, 5]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [answers, setAnswers] = useState<string[]>([])
  const [progressValue, setProgressValue] = useState(0)
  const handlePrevious = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex-1)
        setProgressValue(progressValue - 1 / cards.length)
        if (answers.length > currentIndex) {
            setAnswer(answers[currentIndex])
        }
    }
  }
  const handleNext = () => {
    if (answer.trim() === '') {
      setAnswer('')
      alert('Please enter a answer!!!')
      return
    }
    if (currentIndex < cards.length - 1) {
        setAnswers([...answers, answer])
        setCurrentIndex(currentIndex + 1)
        setProgressValue(progressValue + 1 / cards.length)
        setAnswer('')
    }
  }
  const showSubmit = () => {
    setProgressValue(progressValue + 1 / cards.length)
    console.log(answers)
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContainerRange}>
          {currentIndex + 1}/{cards.length}
        </Text>
        <Bar
          progress={progressValue}
          borderRadius={8}
          height={8}
          width={300}
          unfilledColor={COLORS.secondary['50']}
          color={COLORS.primary['300']}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainerContent}>
          <Text style={styles.bottomContainerTitle}>
            For the sake of achieving my goal(s), I commit to intercept my Judge (of self) when s/he
            tries to _
          </Text>
          <TextInput
            editable
            multiline
            numberOfLines={8}
            onChangeText={text => setAnswer(text)}
            value={answer}
            style={styles.bottomContainerInput}
            placeholder="Write your answer here..."
          />
        </View>
        <View style={styles.bottomContainerButtons}>
          <TouchableOpacity onPress={handlePrevious} style={styles.button}>
            <Text style={styles.buttonTitle}>{currentIndex !== 0 ? 'Previous' : ''}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={currentIndex !== cards.length - 1 ? handleNext : showSubmit}
            style={styles.button}>
            <Text style={styles.buttonTitle}>
              {currentIndex !== cards.length - 1 ? 'Next' : 'Submit'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.emptyContainerOne}></View>
      <View style={styles.emptyContainerTwo}></View>
    </KeyboardAvoidingView>
  )
}

export default ASDayReflection
