import styles from './style.module.scss'
import { ReactComponent as DeleteIcon } from '../../../../../../images/icons/DeleteModal/delete-icon.svg'
import { ReactComponent as EditIcon } from '../../../../../../images/icons/pencil.svg'

interface IContentRowProps {
  isHeader?: boolean
  value: string
  isSelected?: boolean
  handleClick?: () => void
  handleDelete?: () => void
}

const ContentRow = ({
  handleClick = () => {
  }, handleDelete = () => {
  }, isSelected = false, isHeader = false, value
}: IContentRowProps) => {
  const headerStyles = `${styles.contentRow} ${styles.contentRowHeader} ${styles.headerText}`
  const defaultStyles = `${styles.contentRow} ${styles.mainText}`
  const selectedStyles = `${styles.contentRow} ${styles.mainText} ${styles.selected}`

  return (
    <div className={isHeader ? headerStyles : isSelected ? selectedStyles : defaultStyles}>
      <div className={styles.textWrapper} onClick={handleClick}>
        <p className={styles.text}>{value}</p>
      </div>
      {!isHeader && <div className={styles.icon}>
        <EditIcon/>
      </div>}
      {!isHeader && <div className={styles.icon}>
        <DeleteIcon onClick={handleDelete}/>
      </div>}
    </div>
  )
}

export default ContentRow
