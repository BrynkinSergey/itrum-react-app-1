import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IOrder } from '../../types/IOrder'

export interface IOrderState {
  orders: IOrder[]
  paginationValue: number
  currentPage: number
}

const initialState: IOrderState = {
  orders: [],
  paginationValue: 10,
  currentPage: 1
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    fetchManyOrders (state, action: PayloadAction<IOrder[]>) {
      state.orders = action.payload
    },
    editOrder (state, action: PayloadAction<Pick<IOrder, 'id' | 'order_number'>>) {
      const index = state.orders.findIndex(el => el.id === action.payload.id)
      state.orders[index].order_number = action.payload.order_number
    },
    switchToPage (state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setPaginationValue (state, action: PayloadAction<number>) {
      state.paginationValue = action.payload
    }
  }
})

export default orderSlice.reducer
