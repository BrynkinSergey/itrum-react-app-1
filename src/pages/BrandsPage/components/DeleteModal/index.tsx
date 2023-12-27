import styles from './style.module.scss'
import { Button } from '../../../../components'
import { removeBrandAction } from '../../../../store/brandsReducer'
import { useDispatch } from 'react-redux'

interface IDeleteModalProps {
  text: string
  id: string
  handleCancel: () => void
}

const DeleteModal = ({ text, id, handleCancel }: IDeleteModalProps) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <p>Вы действительно хотите удалить бренд</p>
        <p className={styles.brandName}>{text}</p>
        <div className={styles.buttonsWrapper}>
          <Button text={'удалить'} handleClick={() => {
            dispatch(removeBrandAction(id))
            handleCancel()
          }}/>
          <Button text={'отменить удаление'} style={'borderless'} handleClick={handleCancel}/>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
