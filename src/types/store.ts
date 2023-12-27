import { type IBrand } from './IBrand'

export interface IAction {
  type: string
  payload: any
}

export interface IBrandsState {
  brands: IBrand[]
}
