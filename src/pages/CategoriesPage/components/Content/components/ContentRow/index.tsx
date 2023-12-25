import styles from './style.module.scss'
import { ReactComponent as DeleteIcon } from '../../../../../../images/icons/DeleteModal/delete-icon.svg'
import { ReactComponent as EditIcon } from '../../../../../../images/icons/pencil.svg'

interface IContentRowProps {
  isHeader?: boolean
  value: string
}

const ContentRow = ({ isHeader = false, value }: IContentRowProps) => {
  const headerStyles = `${styles.contentRow} ${styles.contentRowHeader} ${styles.headerText}`
  const defaultStyles = `${styles.contentRow} ${styles.mainText}`

  return (
    <div className={isHeader ? headerStyles : defaultStyles}>
      <p className={styles.text}>{value}</p>
      {!isHeader && <div className={styles.icon}>
        <EditIcon/>
      </div>}
      {!isHeader && <div className={styles.icon}>
        <DeleteIcon/>
      </div>}
    </div>
  )
}

export default ContentRow
