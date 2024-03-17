import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Bar } from 'react-native-progress'

import { COLORS } from '../../theme'

import { styles } from './asDayReflection'

const ASDayReflection = () => {
  const questions = [
    'What is your favourite food?',
    'What is your favorite activity?',
    'What is your favourite exercise?',
    'What is your favourite protein name?',
  ]
  const [answer, setAnswer] = useState<string>('')
  const [answers, setAnswers] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progressValue, setProgressValue] = useState(0)
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1)
      setProgressValue(progressValue - 1 / questions.length)
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
    if (currentIndex < questions.length - 1) {
      setAnswers([...answers, answer])
      setCurrentIndex(currentIndex + 1)
      setProgressValue(progressValue + 1 / questions.length)
      setAnswer('')
    }
  }
  const showSubmit = () => {
    setAnswers([...answers, answer])
    setProgressValue(progressValue + 1 / questions.length)
    // console.log(answers)
    // setAnswers('')
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContainerRange}>
          {currentIndex + 1}/{questions.length}
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
          <Text style={styles.bottomContainerTitle}>{questions[currentIndex]}</Text>
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
            onPress={currentIndex !== questions.length - 1 ? handleNext : showSubmit}
            style={styles.button}>
            <Text style={styles.buttonTitle}>
              {currentIndex !== questions.length - 1 ? 'Next' : 'Submit'}
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
