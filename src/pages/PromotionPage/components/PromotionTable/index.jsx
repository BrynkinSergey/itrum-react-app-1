import './style.scss'
import PromotionTableRow from "./components/PromotionTableRow";

const PromotionTable = ({data}) => {
    return <div className={'promotion-table'}>
        <PromotionTableRow isHeader={true} values={['Категория', 'Подкатегория', 'Бренд', 'Товары', 'Кешбек']}/>
        {data.map(({id, category, subCategory, brand, products, cashback}) => <PromotionTableRow key={`row-${id}`}
                                                                                                 id={id}
                                                                                                 values={[category, subCategory, brand, products, cashback]}/>)}
    </div>
}

export default PromotionTable
