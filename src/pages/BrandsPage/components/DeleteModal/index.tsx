import styles from './style.module.scss'
import { Button } from '../../../../components'
import { useAppDispatch } from '../../../../hooks/redux'
import { brandSlice } from '../../../../store/reducers/brandSlice'

interface IDeleteModalProps {
  text: string
  id: string
  handleCancel: () => void
}

const DeleteModal = ({ text, id, handleCancel }: IDeleteModalProps) => {
  const { removeBrand } = brandSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <p>Вы действительно хотите удалить бренд</p>
        <p className={styles.brandName}>{text}</p>
        <div className={styles.buttonsWrapper}>
          <Button text={'Удалить'} handleClick={() => {
            dispatch(removeBrand(id))
            handleCancel()
          }}/>
          <Button text={'Отменить удаление'} style={'borderless'} handleClick={handleCancel}/>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
