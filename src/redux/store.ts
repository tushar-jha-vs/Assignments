import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import {
  dActiveReducer,
  dashboardReducer,
  notificationReducer,
  reflectionReducer,
  wreckersReducer,
} from './reducers'

export const store = configureStore({
  reducer: {
    dActive: dActiveReducer,
    notification: notificationReducer,
    dashboard: dashboardReducer,
    reflection: reflectionReducer,
    wreckers: wreckersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export const useAppDispatch: () => AppDispatchType = useDispatch
