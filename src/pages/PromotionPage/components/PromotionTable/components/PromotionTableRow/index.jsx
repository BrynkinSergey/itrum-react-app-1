import styles from './style.module.scss'
import CustomCheckbox from '../CustomCheckbox'

const PromotionTableRow = ({
  isSomeChecked,
  isChecked,
  toggleCheckbox,
  isHeader,
  id,
  values = [],
  openEditModal = () => {
  }
}) => {
  return (
        <div className={`${styles.promotionTableRow} ${isHeader ? styles.promotionTableRowHeader : ''}`}>
            <CustomCheckbox isSomeChecked={isSomeChecked} isChecked={isChecked}
                            onChangeHandler={() => toggleCheckbox()}/>
            <div onClick={() => {
              if (!isHeader) {
                openEditModal({
                  id,
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
