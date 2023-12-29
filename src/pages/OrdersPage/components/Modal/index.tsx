import styles from './style.module.scss'
import { deliveryTypeEnum, type IOrder, paymentTypeEnum } from '../../../../types/IOrder'
import { useEffect } from 'react'
import { Button, CustomInput, CustomSelect } from '../../../../components'
import EditField from './components/EditField'
import { orderTypeToPaymentType } from '../../../../helpers/orderTypeToPaymentType'
import TextArea from '../../../../components/TextArea'

interface IModalProps {
  order: IOrder
  handleClose: () => void
}

const deliveryTypeToText = (value: deliveryTypeEnum) => {
  switch (value) {
    case deliveryTypeEnum.pickup:
      return 'Самовывоз'
    case deliveryTypeEnum.delivery:
      return 'Доставка'
  }
}

const Modal = ({ order, handleClose }: IModalProps) => {
  const fullName = `${order.user.lastName ? order.user.lastName : ''} ${order.user.name ? order.user.name : ''}`

  useEffect(() => {
    const close = (e: WindowEventMap['keydown']) => {
      if (e.code === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('keydown', close)
    }
  }, [])

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <div className={styles.buttonsWrapper}>
          <Button handleClick={handleClose} text={'Закрыть'} sizing={'fixed'} style={'outlined'}/>
          <Button handleClick={handleClose} text={'Подтвердить'} sizing={'fixed'}/>
        </div>
        <div className={styles.scrollableContent}>
          <EditField text={'Заказчик'}>
            <CustomInput type={'text'} value={fullName.trim()}/>
          </EditField>
          <EditField text={'Номер заказа'}>
            <CustomInput type={'text'} value={order.order_number}/>
          </EditField>
          <EditField text={'Дата оформления'}>
            <CustomInput type={'text'} value={order.date}/>
          </EditField>
          <EditField text={'Способ оплаты'}>
            <CustomSelect isFullSize={false} options={Object.values(paymentTypeEnum)}
                          defaultOption={orderTypeToPaymentType(order.order_type)}
                          handleChange={() => {
                          }}/>
          </EditField>
          <EditField text={'Способо получения'}>
            <CustomInput type={'text'} value={deliveryTypeToText(order.delivery_type)}/>
          </EditField>

          {order.delivery_type === deliveryTypeEnum.pickup &&
            <EditField text={'Пункт самовывоза'}>
              <CustomInput type={'text'} value={order.warehouse.city}/>
            </EditField>}

          {order.delivery_type === deliveryTypeEnum.delivery && <>
            <div className={styles.deliveryRowWrapper}>
              <EditField isGrowable={true} text={'Город'}>
                <CustomInput isFullWidth={true} type={'text'} value={order.warehouse.city}/>
              </EditField>
              <EditField isGrowable={true} text={'Улица'}>
                <CustomInput isFullWidth={true} type={'text'} value={'Пушкинская'}/>
              </EditField>
            </div>
            <div className={styles.deliveryRowWrapper}>
              <EditField isGrowable={true} text={'Дом'}>
                <CustomInput isFullWidth={true} type={'text'} value={'23'}/>
              </EditField>
              <EditField isGrowable={true} text={'Квартира'}>
                <CustomInput isFullWidth={true} type={'text'} value={'21'}/>
              </EditField>
            </div>
          </>}
          <EditField text={'Дополнительная информация'}>
            <TextArea value={'Поднимите пожалуйста на 4 этаж'}/>
          </EditField>
          <EditField text={'Дополнительная информация по оплате'}>
            <TextArea value={'Перевести на карту'}/>
          </EditField>
          <div className={styles.productsWrapper}>
            <p className={styles.title}>Товары</p>
            <div className={styles.card}>
              <div className={styles.row}>
                <p className={styles.boldText}>Kosmoteros Personnel</p>
                <p className={styles.mainText}>SKU0002</p>
              </div>
              <div className={styles.row}>
                <p className={styles.boldText}>Количество</p>
                <p className={styles.mainText}>1</p>
              </div>
              <div className={styles.row}>
                <p className={styles.mainText}>Биостимулирующий дневной крем</p>
              </div>
              <div className={styles.row}>
                <p className={styles.blackText}>100мл</p>
                <div className={styles.priceWrapper}>
                  <p className={styles.oldPrice}>4 567 ₽</p>
                  <p>4 567 ₽</p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.row}>
                <p className={styles.boldText}>Kosmoteros Personnel</p>
                <p className={styles.mainText}>SKU0002</p>
              </div>
              <div className={styles.row}>
                <p className={styles.boldText}>Количество</p>
                <p className={styles.mainText}>1</p>
              </div>
              <div className={styles.row}>
                <p className={styles.mainText}>Биостимулирующий дневной крем</p>
              </div>
              <div className={styles.row}>
                <p className={styles.blackText}>100мл</p>
                <div className={styles.priceWrapper}>
                  <p className={styles.oldPrice}>4 567 ₽</p>
                  <p>4 567 ₽</p>
                </div>
              </div>
            </div>
            <button className={styles.editButton}>Изменить</button>
            <div className={styles.total}>
              <p className={styles.title}>Сумма заказа</p>
              <div className={styles.smallText}>
                <div className={styles.row}>
                  <p>Товары</p>
                  <p className={styles.black500Text}>9 134 ₽</p>
                </div>
                <div className={styles.row}>
                  <p>Скидка</p>
                  <p className={styles.black500Text}>888 ₽</p>
                </div>
                <div className={styles.row}>
                  <p>Сумма начисленных бонусов</p>
                  <p className={`${styles.black500Text} ${styles.bonuses}`}>888</p>
                </div>
              </div>
              <div className={`${styles.row} ${styles.blackText}`}>
                <p>Итого</p>
                <p>8 242 ₽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background} onClick={handleClose}></div>
    </div>
  )
}

export default Modal
