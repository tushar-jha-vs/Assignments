import AsyncStorage from '@react-native-async-storage/async-storage'

import { COLORS } from '../theme'


export const readData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
  } catch (e) {
    console.error('Failed to fetch the input from storage')
  }
}

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.error('Failed to save the data to the storage')
  }
}

export const getColorForPercentage = (percentage: number): string => {
  let color: string
  switch (Math.floor(percentage / 10)) {
    case 0:
      color = COLORS.success[50]
      break
    case 1:
      color = COLORS.success[100]
      break
    case 2:
      color = COLORS.success[200]
      break
    case 3:
      color = COLORS.success[300]
      break
    case 4:
      color = COLORS.success[400]
      break
    case 5:
      color = COLORS.secondary[100]
      break
    case 6:
      color = COLORS.secondary[200]
      break
    case 7:
      color = COLORS.secondary[300]
      break
    case 8:
      color = COLORS.brightRed
      break
    case 9:
      color = COLORS.failure
      break
    default:
      color = COLORS.neutral['300']
  }
  return color
}
