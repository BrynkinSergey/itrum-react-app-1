import { combineReducers, createStore } from 'redux'
import { brandsReducer } from './brandsReducer'

const rootReducer = combineReducers({
  brand: brandsReducer
})

export const store = createStore(rootReducer)
