import uuid from 'uuidv4'
import { type IAction, type IBrandsState } from '../types/store'
import { type IBrand } from '../types/IBrand'

const defaultState: IBrandsState = {
  brands: []
}

enum actions {
  addBrand = 'addBrand',
  removeBrand = 'removeBrand'
}

export const brandsReducer = (state = defaultState, action: IAction): IBrandsState => {
  switch (action.type) {
    case actions.addBrand:
      return { ...state, brands: [...state.brands, { id: uuid(), name: action.payload.name, logo: action.payload.logo }] }
    case actions.removeBrand:
      return { ...state, brands: state.brands.filter(el => el.id !== action.payload) }
    default:
      return state
  }
}

export const addBrandAction = (payload: Pick<IBrand, 'name' | 'logo'>) => ({ type: actions.addBrand, payload })
export const removeBrandAction = (payload: string) => ({ type: actions.removeBrand, payload })
