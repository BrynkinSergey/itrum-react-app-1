import styles from './style.module.scss'
import { ReactComponent as DeleteIcon } from '../../../../images/icons/DeleteModal/delete-icon.svg'

interface IDeleteModalProps {
  numberOfChecked: number
  deleteHandler: () => void
}

const DeleteModal = ({ numberOfChecked, deleteHandler }: IDeleteModalProps) => {
  return (
    <div className={styles.deleteModal}>
      <p className={styles.text}>Количество
        выбранных
        позиций: {numberOfChecked}</p>
      <button className={styles.deleteModalButton} onClick={deleteHandler}>
        <DeleteIcon/>
        <p className={styles.text}>Удалить</p>
      </button>
    </div>
  )
}

export default DeleteModal
