import { orderTypeEnum, paymentTypeEnum } from '../types/IOrder'

export const orderTypeToPaymentType = (orderType: orderTypeEnum): paymentTypeEnum => {
  switch (orderType) {
    case orderTypeEnum.online:
      return paymentTypeEnum.online
    case orderTypeEnum.courierCash:
      return paymentTypeEnum.courierCash
    case orderTypeEnum.officeCash:
      return paymentTypeEnum.officeCash
    case orderTypeEnum.officeTerminal:
      return paymentTypeEnum.officeTerminal
  }
}
