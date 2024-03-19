import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { IMyReflectionsType } from '../../types'
import { MY_REFLECTIONS_BASE_URL } from '../../constants'

export const fetchReflectionsListData = createAsyncThunk('fetchReflectionsListData', async () => {
  try {
    const response = await fetch(MY_REFLECTIONS_BASE_URL)
    const data = await response.json()
    return data
  } catch (error) {
    return []
  }
})

type InitialDActiveStateProps = {
  reflectionList: IMyReflectionsType[]
  isLoading: boolean
  isError: boolean
}

const initialState: InitialDActiveStateProps = {
  reflectionList: [],
  isLoading: false,
  isError: false,
}

export const reflectionsSlice = createSlice({
  name: 'Reflections',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchReflectionsListData.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchReflectionsListData.fulfilled, (state, action) => {
      state.isLoading = false
      state.reflectionList = action.payload
    })
    builder.addCase(fetchReflectionsListData.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      console.error('Error: ', action.payload)
    })
  },
})

export default reflectionsSlice.reducer
