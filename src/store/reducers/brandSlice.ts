import { type IBrand } from '../../types/IBrand'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import uuid from 'uuidv4'

export interface IBrandState {
  brands: IBrand[]
}

const initialState: IBrandState = {
  brands: []
}

export const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    addBrand (state, action: PayloadAction<Pick<IBrand, 'name' | 'logo'>>) {
      state.brands.push({ id: uuid(), name: action.payload.name, logo: action.payload.logo })
    },
    removeBrand (state, action: PayloadAction<string>) {
      state.brands = state.brands.filter(el => el.id !== action.payload)
    },
    updateBrand (state, action: PayloadAction<IBrand>) {
      const { id, name, logo } = action.payload
      const index = state.brands.findIndex(el => el.id === action.payload.id)
      state.brands[index] = { id, name, logo: logo ?? state.brands[index].logo }
    }
  }
})

export default brandSlice.reducer
