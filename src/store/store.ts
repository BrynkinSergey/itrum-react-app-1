import { configureStore } from '@reduxjs/toolkit'
import brandReducer from './reducers/brandSlice'
import orderReducer from './reducers/orderSlice'

export const store = configureStore({
  reducer: {
    brandReducer,
    orderReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
