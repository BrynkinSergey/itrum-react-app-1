import type { IMockPromotion, IPromotion } from '../types/IPromotion'
import uuid from 'uuidv4'

const parseData = (data: IMockPromotion[]): IPromotion[] => {
  return data.map((el) => {
    const { cashback, ...other } = el
    return {
      id: uuid(),
      isChecked: false,
      cashback: `${Math.trunc(el.cashback * 100)}%`,
      ...other
    }
  })
}

export default parseData
