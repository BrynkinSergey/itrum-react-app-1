import { applyMiddleware, combineReducers, createStore } from 'redux'
import { brandsReducer } from './brandsReducer'
import { ordersReducer } from './ordersReducer'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
  brand: brandsReducer,
  order: ordersReducer
})

// @ts-expect-error using deprecated methods for education
export const store = createStore(rootReducer, applyMiddleware(thunk))
