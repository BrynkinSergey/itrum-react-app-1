import uuid from 'uuidv4'

import type { IMockPromotion, IPromotion } from '../types/IPromotion'

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
