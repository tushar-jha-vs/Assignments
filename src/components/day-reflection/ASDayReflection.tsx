import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Bar } from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { DAILY_REFLECTIONS_QUESTIONS } from '../../constants'
import { COLORS, SPACING } from '../../theme'
import { RootStackParamList } from '../../types'

import { styles } from './asDayReflection-styles'

const ASDayReflection = () => {
  const [answer, setAnswer] = useState<string>('')
  const [answers, setAnswers] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progressValue, setProgressValue] = useState(0)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const handlePrevious = () => {
    if (currentIndex > 0) {
      if (answers.length > currentIndex - 1) {
        setAnswer(answers[currentIndex - 1])
      }
      answers[currentIndex] = answer
      setAnswers([...answers])
      setCurrentIndex(prevIndex => prevIndex - 1)
      setProgressValue(prevProgressValue => {
        return prevProgressValue - 1 / DAILY_REFLECTIONS_QUESTIONS.length
      })
    }
  }
  const handleNext = () => {
    if (answer.trim() === '') {
      setAnswer('')
      Alert.alert('Please enter a answer!!!')
      return
    }
    if (currentIndex + 1 < answers.length) {
      answers[currentIndex] = answer
      setAnswer(answers[currentIndex + 1])
      setAnswers([...answers])
      setCurrentIndex(prevIndex => prevIndex + 1)
      setProgressValue(prevProgressValue => {
        return prevProgressValue + 1 / DAILY_REFLECTIONS_QUESTIONS.length
      })
      return
    }
    if (currentIndex < DAILY_REFLECTIONS_QUESTIONS.length - 1) {
      setAnswers(prevAnswers => [...prevAnswers, answer])
      setCurrentIndex(prevIndex => prevIndex + 1)
      setProgressValue(prevProgressValue => {
        return prevProgressValue + 1 / DAILY_REFLECTIONS_QUESTIONS.length
      })
      setAnswer('')
    }
  }
  const showSubmit = () => {
    if (answer.trim() === '') {
      setAnswer('')
      Alert.alert('Please enter a answer!!!')
      return
    }
    if (currentIndex < answers.length) {
      answers[currentIndex] = answer
    } else {
      answers.push(answer)
    }
    setAnswers([...answers])
    setProgressValue(prevProgressValue => {
      return prevProgressValue + 1 / DAILY_REFLECTIONS_QUESTIONS.length
    })
    console.log(answers)
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContainerRange}>
          {currentIndex + 1}/{DAILY_REFLECTIONS_QUESTIONS.length}
        </Text>
        <Bar
          progress={progressValue + 1 / DAILY_REFLECTIONS_QUESTIONS.length}
          borderRadius={SPACING.space_8}
          height={SPACING.space_8}
          width={SPACING.space_300}
          unfilledColor={COLORS.secondary['50']}
          color={COLORS.primary['300']}
        />
      </View>
      <KeyboardAvoidingView enabled behavior="position" keyboardVerticalOffset={SPACING.space_148}>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomContainerContent}>
            <Text style={styles.bottomContainerTitle}>
              {DAILY_REFLECTIONS_QUESTIONS[currentIndex]}
            </Text>
            <TextInput
              editable
              multiline
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
              onPress={
                currentIndex !== DAILY_REFLECTIONS_QUESTIONS.length - 1 ? handleNext : showSubmit
              }
              style={styles.button}>
              <Text style={styles.buttonTitle}>
                {currentIndex !== DAILY_REFLECTIONS_QUESTIONS.length - 1 ? 'Next' : 'Submit'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.emptyContainerOne}></View>
        <View style={styles.emptyContainerTwo}></View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default ASDayReflection
