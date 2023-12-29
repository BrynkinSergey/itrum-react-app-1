import styles from './style.module.scss'
import SearchInput from '../../components/SearchInput'
import { PaginationNavbar } from '../../components'
import OrdersRow from './components/OrdersRow'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../asyncActions/orders'
import { deliveryTypeEnum, type IOrder } from '../../types/IOrder'
import { type IOrdersState, setPaginationValueAction, switchToPageAction } from '../../store/ordersReducer'
import Modal from './components/Modal'

const OrdersPage = () => {
  const orders: IOrder[] = useSelector((state: { order: IOrdersState }) => state.order.orders)
  const currentPage = useSelector((state: { order: IOrdersState }) => state.order.currentPage)
  const paginationValue = useSelector((state: { order: IOrdersState }) => state.order.paginationValue)

  const dispatch = useDispatch()

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
    // @ts-expect-error IDK how to type this
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
        dispatch(setPaginationValueAction(+value))
      }} pagesNumber={pagesNumber} currentPage={currentPage} onChangePage={(page) => {
        dispatch(switchToPageAction(page))
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
