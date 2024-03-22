import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Logo } from '../../assets'
import { RootNativeStackParamsList } from '../../types'

import { styles } from './login-styles'

const Login = () => {
  const [number, setNumber] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [numberError, setNumberError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>()
  const buttonLabel = number.trim() && password.trim() ? 'Login' : 'Sign In with Google'

  const handleSubmit = async () => {
    const numberRegex = new RegExp(/^(?:\+)?[6-9][0-9]{9}$/)
    if (!numberRegex.test(number)) {
      setNumberError(true)
      return
    }
    const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    if (!passwordRegex.test(password)) {
      setPasswordError(true)
      return
    }
    if (numberError || passwordError) return
    setNumber('')
    setPassword('')
    navigation.navigate('TabNavigator')
  }
  const handleNumberPress = (number: string) => {
    setNumber(number)
    setPasswordError(false)
    setNumberError(false)
  }
  const handlePasswordPress = (password: string) => {
    setPassword(password)
    setPasswordError(false)
    setNumberError(false)
  }
  return (
    <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={10} behavior="position">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
          <Logo />
          <Text style={styles.title}>COVSTATS</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.inputLabel}>Mobile Number</Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.inputArea}
            placeholder="Enter your mobile number"
            value={number}
            onChangeText={number => handleNumberPress(number)}
          />
          <Text style={styles.error}>{numberError ? 'Invalid mobile number' : ' '}</Text>
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            secureTextEntry
            style={styles.inputArea}
            placeholder="Enter your password"
            value={password}
            onChangeText={password => handlePasswordPress(password)}
          />
          <Text style={styles.error}>{passwordError ? 'Invalid password' : ' '}</Text>
        </View>
        <TouchableOpacity style={styles.signInButton} onPress={handleSubmit}>
          <Text style={styles.buttonLabel}>{buttonLabel}</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login
