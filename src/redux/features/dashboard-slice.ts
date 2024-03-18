import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { IDashboardProps } from '../../types'
import { DASHBOARD_BASE_URL } from '../../constants'

export const fetchDashboardListData = createAsyncThunk('fetchDashboardListData', async () => {
  try {
    const response = await fetch(DASHBOARD_BASE_URL)
    const data = await response.json()
    return data
  } catch (error) {
    return []
  }
})

type InitialDActiveStateProps = {
  dashboardChallengesList: IDashboardProps[]
  isLoading: boolean
  isError: boolean
}

const initialState: InitialDActiveStateProps = {
  dashboardChallengesList: [],
  isLoading: false,
  isError: false,
}

export const dashboardSlice = createSlice({
  name: 'Dashboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDashboardListData.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchDashboardListData.fulfilled, (state, action) => {
      state.isLoading = false
      state.dashboardChallengesList = action.payload
    })
    builder.addCase(fetchDashboardListData.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      console.error('Error: ', action.payload)
    })
  },
})

export default dashboardSlice.reducer
