import { type IOrder } from '../types/IOrder'
import { orderSlice } from './reducers/orderSlice'

const { fetchManyOrders } = orderSlice.actions

export const fetchOrders = () => {
  return (dispatch: any) => {
    void fetch('http://localhost:8000/data')
      .then(async res => await res.json())
      .then((json: IOrder[]) => {
        dispatch(fetchManyOrders(json))
      })
  }
}
