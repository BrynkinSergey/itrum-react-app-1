import { type IAction } from '../types/store'
import { type IOrder } from '../types/IOrder'

export interface IOrdersState {
  orders: IOrder[]
  paginationValue: number
  currentPage: number
}

const defaultState: IOrdersState = {
  orders: [],
  paginationValue: 10,
  currentPage: 1
}

enum actions {
  fetchManyOrders = 'addManyOrders',
  switchToPage = 'switchToPage',
  setPaginationValue = 'setPaginationValue'
}

export const ordersReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case actions.fetchManyOrders:
      return { ...state, orders: [...action.payload] }
    case actions.switchToPage:
      return { ...state, currentPage: action.payload }
    case actions.setPaginationValue:
      return { ...state, paginationValue: action.payload }
    default:
      return state
  }
}

export const fetchManyOrdersAction = (payload: any[]) => ({ type: actions.fetchManyOrders, payload })
export const switchToPageAction = (payload: number) => ({ type: actions.switchToPage, payload })
export const setPaginationValueAction = (payload: number) => ({ type: actions.setPaginationValue, payload })
