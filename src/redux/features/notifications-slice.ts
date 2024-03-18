import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { IASNotificationCardProps } from '../../types'
import { NOTIFICATIONS_BASE_URL } from '../../constants'

export const fetchNotificationsListData = createAsyncThunk(
  'fetchNotificationsListData',
  async () => {
    try {
      const response = await fetch(NOTIFICATIONS_BASE_URL)
      const data = await response.json()
      return data
    } catch (error) {
      return []
    }
  },
)

type InitialDActiveStateProps = {
  notificationsList: IASNotificationCardProps[]
  isLoading: boolean
  isError: boolean
}

const initialState: InitialDActiveStateProps = {
  notificationsList: [],
  isLoading: false,
  isError: false,
}

export const notificationsSlice = createSlice({
  name: 'Notifications',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNotificationsListData.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchNotificationsListData.fulfilled, (state, action) => {
      state.isLoading = false
      state.notificationsList = action.payload
    })
    builder.addCase(fetchNotificationsListData.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      console.error('Error: ', action.payload)
    })
  },
})

export default notificationsSlice.reducer
