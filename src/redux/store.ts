import { configureStore } from '@reduxjs/toolkit'
import dActiveReducer from './features/dActive-slice'
import notificationReducer from './features/notifications-slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    dActive: dActiveReducer,
    notification: notificationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export const useAppDispatch: () => AppDispatchType = useDispatch
