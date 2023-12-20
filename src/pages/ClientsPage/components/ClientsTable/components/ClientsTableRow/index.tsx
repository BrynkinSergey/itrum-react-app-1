import styles from './style.module.scss'

interface IClientsTableRowProps {
  isHeader?: boolean
  id: number
  values: string[]
}

const ClientsTableRow = ({ isHeader = false, values, id }: IClientsTableRowProps) => {
  const headerStyles = `${styles.clientsTableRow} ${styles.clientsTableRowHeader} ${styles.headerText}`
  const defaultStyles = `${styles.clientsTableRow} ${styles.mainText}`

  return (
    <div className={isHeader ? headerStyles : defaultStyles}>
      {values.map((el, index) => <p key={`cell-${id}-${index}`}>{el}</p>)}
    </div>
  )
}

export default ClientsTableRow
