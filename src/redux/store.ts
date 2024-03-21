import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { covstatsReducer } from './reducers'

export const store = configureStore({
  reducer: {
    covstats: covstatsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export const useAppDispatch: () => AppDispatchType = useDispatch
