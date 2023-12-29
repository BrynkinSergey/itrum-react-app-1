import { fetchManyOrdersAction } from '../store/ordersReducer'
import { type IOrder } from '../types/IOrder'

export const fetchOrders = () => {
  return (dispatch: any) => {
    void fetch('http://localhost:8000/data')
      .then(async res => await res.json())
      .then((json: IOrder[]) => {
        dispatch(fetchManyOrdersAction(json))
      })
  }
}
