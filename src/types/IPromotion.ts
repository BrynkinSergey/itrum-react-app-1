export interface IPromotion {
  id: number
  isChecked: boolean
  category: string
  subCategory: string
  brand: string
  products: string
  cashback: string
}

export interface IMockPromotion {
  category: string
  subCategory: string
  brand: string
  products: string
  cashback: number
}
