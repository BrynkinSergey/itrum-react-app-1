export enum orderTypeEnum {
  online = 'ONLINE',
  officeCash = 'OFFICE_CASH',
  officeTerminal = 'OFFICE_TERMINAL',
  courierCash = 'COURIER_CASH'
}

export enum paymentTypeEnum {
  online = 'Онлайн',
  courierCash = 'Наличными курьеру',
  officeCash = 'Наличными при получении',
  officeTerminal = 'Картой при получении',
}

export enum deliveryTypeEnum {
  pickup = 'PICKUP',
  delivery = 'DELIVERY'
}

export enum roleEnum {
  specialist = 'SPECIALIST'
}

export interface IOrder {
  id: string
  order_type: orderTypeEnum
  total: number
  isViewedByAdmin: boolean
  order_number: string
  delivery_type: deliveryTypeEnum
  isPayed: boolean
  user: {
    id: string
    name: string
    lastName: string
    secondName: string
    firmName: string
    role: roleEnum
  }
  warehouse: {
    city: string
  }
  date: string
}
