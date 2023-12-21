import styles from './style.module.scss'
import CustomCheckbox from '../CustomCheckbox'
import { type IPromotion } from '../../../../../../types/IPromotion'

interface IPromotionTableRowProps {
  isSomeChecked?: boolean
  isChecked: boolean
  toggleCheckbox: () => void
  isHeader?: boolean
  id?: number
  values?: string[]
  openEditModal?: (values: IPromotion) => void
}

const PromotionTableRow = ({
  isSomeChecked = false,
  isChecked,
  toggleCheckbox,
  isHeader = false,
  id = 0,
  values = [],
  openEditModal = () => {
  }
}: IPromotionTableRowProps) => {
  return (
    <div className={`${styles.promotionTableRow} ${isHeader ? styles.promotionTableRowHeader : ''}`}>
      <CustomCheckbox isSomeChecked={isSomeChecked} isChecked={isChecked}
                      onChangeHandler={() => {
                        toggleCheckbox()
                      }}/>
      <div onClick={() => {
        if (!isHeader) {
          openEditModal({
            id,
            isChecked,
            category: values[0],
            subCategory: values[1],
            brand: values[2],
            products: values[3],
            cashback: values[4]
          })
        }
      }}>
        {values.map((el, index) => <p key={`cell-${id}-${index}`}>{el}</p>)}
      </div>
    </div>
  )
}

export default PromotionTableRow
