import styles from './style.module.scss'

interface IOrdersRowProps {
  isHeader?: boolean
  id: string
  values: string[]
  handleClick?: (id: string) => void
}

const OrdersRow = ({
  handleClick = () => {
  }, isHeader = false, values, id
}: IOrdersRowProps) => {
  const headerStyles = `${styles.ordersTableRow} ${styles.ordersTableRowHeader} ${styles.headerText}`
  const defaultStyles = `${styles.ordersTableRow} ${styles.mainText}`

  return (
    <div className={isHeader ? headerStyles : defaultStyles} onClick={() => {
      handleClick(id)
    }}>
      {values.map((el, index) => <p key={`cell-${id}-${index}`}>{el}</p>)}
    </div>
  )
}

export default OrdersRow
