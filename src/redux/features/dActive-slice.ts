import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { IASDActiveCardProps } from '../../types'
import { DACTIVE_BASE_URL } from '../../constants'

export const fetchDActiveListData = createAsyncThunk('fetchDActiveListData', async () => {
  try {
    const response = await fetch(DACTIVE_BASE_URL)
    const data = await response.json()
    return data
  } catch (error) {
    return []
  }
})

type InitialDActiveStateProps = {
  dActiveList: IASDActiveCardProps[]
  isLoading: boolean
  isError: boolean
}

const initialState: InitialDActiveStateProps = {
  dActiveList: [],
  isLoading: false,
  isError: false,
}

export const dActiveSlice = createSlice({
  name: 'D-active',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDActiveListData.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchDActiveListData.fulfilled, (state, action) => {
      state.isLoading = false
      state.dActiveList = action.payload
    })
    builder.addCase(fetchDActiveListData.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      console.error('Error: ', action.payload)
    })
  },
})

export default dActiveSlice.reducer
