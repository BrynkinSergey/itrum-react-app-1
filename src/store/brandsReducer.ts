import uuid from 'uuidv4'
import { type IAction, type IBrandsState } from '../types/store'
import { type IBrand } from '../types/IBrand'

const defaultState: IBrandsState = {
  brands: []
}

enum actions {
  addBrand = 'addBrand',
  removeBrand = 'removeBrand',
  updateBrand = 'updateBrand'
}

export const brandsReducer = (state = defaultState, action: IAction): IBrandsState => {
  switch (action.type) {
    case actions.addBrand:
      return { ...state, brands: [...state.brands, { id: uuid(), name: action.payload.name, logo: action.payload.logo }] }
    case actions.removeBrand:
      return { ...state, brands: state.brands.filter(el => el.id !== action.payload) }
    case actions.updateBrand:
      return {
        ...state,
        brands: state.brands.map(el => {
          if (el.id === action.payload.id) {
            return { id: el.id, name: action.payload.name, logo: action.payload.logo ?? el.logo }
          }
          return el
        })
      }
    default:
      return state
  }
}

export const addBrandAction = (payload: Pick<IBrand, 'name' | 'logo'>) => ({ type: actions.addBrand, payload })
export const updateBrandAction = (payload: IBrand) => ({ type: actions.updateBrand, payload })
export const removeBrandAction = (payload: string) => ({ type: actions.removeBrand, payload })
