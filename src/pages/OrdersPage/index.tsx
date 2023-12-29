import styles from './style.module.scss'
import SearchInput from '../../components/SearchInput'
import { PaginationNavbar } from '../../components'
import OrdersRow from './components/OrdersRow'
import { useEffect, useState } from 'react'
import { deliveryTypeEnum, type IOrder } from '../../types/IOrder'
import Modal from './components/Modal'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { orderSlice } from '../../store/reducers/orderSlice'
import { fetchOrders } from '../../store/actionCreators'

const OrdersPage = () => {
  const { orders, currentPage, paginationValue } = useAppSelector(state => state.orderReducer)
  const { setPaginationValue, switchToPage } = orderSlice.actions

  const dispatch = useAppDispatch()

  const [pagesNumber, setPagesNumber] = useState(1)
  const [showedOrders, setShowedOrders] = useState<IOrder[]>([])
  const [filterMask, setFilterMask] = useState('')
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null)
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null)

  const isClientMatchesFilterMask = (order: IOrder) => {
    const lowerFilterMask = filterMask.toLowerCase()
    const fullName = `${order.user.lastName ?? ''} ${order.user.name ?? ''}`
    const lowerFullName = fullName.trim().toLowerCase()

    return lowerFullName.includes(lowerFilterMask) ||
      (order.order_number.toLowerCase().includes(lowerFilterMask))
  }

  useEffect(() => {
    dispatch(fetchOrders())
  }, [])

  useEffect(() => {
    const order = orders.find(el => el.id === selectedOrderId)
    setSelectedOrder(order ?? null)
  }, [selectedOrderId])

  useEffect(() => {
    const showFrom = ((currentPage - 1) * paginationValue)
    const showTo = showFrom + paginationValue
    const filteredOrders = orders.filter(isClientMatchesFilterMask)
    setPagesNumber(Math.ceil(filteredOrders.length / paginationValue) || 1)
    setShowedOrders(filteredOrders.slice(showFrom, showTo))
  }, [orders, paginationValue, currentPage, filterMask])

  return (
    <div className={styles.ordersPage}>
      <SearchInput placeholder={'Поиск по заказам'} handleBlur={setFilterMask}/>
      <PaginationNavbar handleSelectChange={(value) => {
        dispatch(setPaginationValue(+value))
      }} pagesNumber={pagesNumber} currentPage={currentPage} onChangePage={(page) => {
        dispatch(switchToPage(page))
      }}/>
      <div className={styles.fullWidthWrapper}>
        <OrdersRow id={'0'}
                   values={['Покупатель', 'Номер заказа', 'Способ получения', 'Дата оформления', 'Сумма заказа', 'Оплачено']}
                   isHeader={true}/>
        <div className={styles.rowsWrapper}>
          {orders.length
            ? showedOrders?.map(el => {
              const fullName = `${el.user.lastName ? el.user.lastName : ''} ${el.user.name}`
              const deliveryType = el.delivery_type === deliveryTypeEnum.pickup ? 'Самовывоз' : 'Доставка'
              const total = `${el.total} ₽`
              const isPayed = el.isPayed ? 'Да' : 'Нет'
              return <OrdersRow key={`order-row-${el.id}`} id={el.id}
                                values={[fullName, el.order_number, deliveryType, el.date, total, isPayed]}
                                handleClick={setSelectedOrderId}/>
            })
            : <p>Здесь пока нет заказов</p>}
        </div>
      </div>
      {selectedOrder && <Modal handleClose={() => {
        setSelectedOrderId(null)
      }
      } order={selectedOrder}/>}
    </div>
  )
}

export default OrdersPage
