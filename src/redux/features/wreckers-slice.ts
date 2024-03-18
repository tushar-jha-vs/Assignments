import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { IProgressProps } from '../../types'
import { PROGRESS_LIST_BASE_URL } from '../../constants'

export const fetchWreckersListData = createAsyncThunk('fetchWreckersListData', async () => {
  try {
    const response = await fetch(PROGRESS_LIST_BASE_URL)
    const data = await response.json()
    return data
  } catch (error) {
    return []
  }
})

type InitialDActiveStateProps = {
  wreckersList: IProgressProps[]
  isLoading: boolean
  isError: boolean
}

const initialState: InitialDActiveStateProps = {
  wreckersList: [],
  isLoading: false,
  isError: false,
}

export const wreckersSlice = createSlice({
  name: 'Wreckers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchWreckersListData.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchWreckersListData.fulfilled, (state, action) => {
      state.isLoading = false
      state.wreckersList = action.payload
    })
    builder.addCase(fetchWreckersListData.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      console.error('Error: ', action.payload)
    })
  },
})

export default wreckersSlice.reducer
