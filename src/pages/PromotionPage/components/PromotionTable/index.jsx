import './style.scss'
import PromotionTableRow from "./components/PromotionTableRow";

const PromotionTable = ({data, toggleCheckbox, toggleCheckboxAll}) => {
    const isChecked = data.every(el => el.isChecked)
    const isSomeChecked = data.some(el => el.isChecked)

    return <div className={'promotion-table'}>
        <PromotionTableRow isChecked={isChecked} isSomeChecked={isSomeChecked}
                           toggleCheckbox={() => toggleCheckboxAll(isChecked, isSomeChecked)} isHeader={true}
                           values={['Категория', 'Подкатегория', 'Бренд', 'Товары', 'Кешбек']}/>
        {data.map(({id, category, subCategory, brand, products, cashback, isChecked}) => <PromotionTableRow
            key={`row-${id}`}
            isChecked={isChecked}
            toggleCheckbox={() => toggleCheckbox(id)}
            id={id}
            values={[category, subCategory, brand, products, cashback]}/>)}
    </div>
}

export default PromotionTable
