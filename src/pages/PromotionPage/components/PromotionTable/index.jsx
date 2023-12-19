import styles from './style.module.scss'
import PromotionTableRow from "./components/PromotionTableRow";

const PromotionTable = ({
                            data, toggleCheckbox, toggleCheckboxAll, openEditModal = () => {
    }
                        }) => {
    const isChecked = data.every(el => el.isChecked)
    const isSomeChecked = data.some(el => el.isChecked)

    return <div className={styles.promotionTable}>
        <PromotionTableRow isChecked={isChecked} isSomeChecked={isSomeChecked}
                           toggleCheckbox={() => toggleCheckboxAll(isChecked, isSomeChecked)} isHeader={true}
                           values={['Категория', 'Подкатегория', 'Бренд', 'Товары', 'Кешбек']}/>
        {data.map(({id, category, subCategory, brand, products, cashback, isChecked}) => <PromotionTableRow
            key={`row-${id}`}
            isChecked={isChecked}
            toggleCheckbox={() => toggleCheckbox(id)}
            id={id}
            values={[category, subCategory, brand, products, cashback]}
            openEditModal={openEditModal}/>)}
    </div>
}

export default PromotionTable
