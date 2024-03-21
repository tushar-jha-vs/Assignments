import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ICountryData } from '../../types'

import { BASE_URL } from '../../constants'

export const fetchCovstatsData = createAsyncThunk('fetchCovstatsData', async () => {
  try {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
})

type InitialCovstatsProps = {
  covstatsList: ICountryData[]
  isLoading: boolean
  isError: boolean
}

const initialState: InitialCovstatsProps = {
  covstatsList: [],
  isLoading: false,
  isError: false,
}

export const covstatsSlice = createSlice({
  name: 'Covstats',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCovstatsData.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchCovstatsData.fulfilled, (state, action) => {
      state.isLoading = false
      state.covstatsList = action.payload
    })
    builder.addCase(fetchCovstatsData.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      console.error('Error: ', action.payload)
    })
  },
})

export default covstatsSlice.reducer
