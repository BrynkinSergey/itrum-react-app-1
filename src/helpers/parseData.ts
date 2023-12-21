import type { IMockPromotion, IPromotion } from '../types/IPromotion'

const parseData = (data: IMockPromotion[]): IPromotion[] => {
  return data.map((el, index) => {
    const { cashback, ...other } = el
    return {
      id: index + 1,
      isChecked: false,
      cashback: `${Math.trunc(el.cashback * 100)}%`,
      ...other
    }
  })
}

export default parseData
