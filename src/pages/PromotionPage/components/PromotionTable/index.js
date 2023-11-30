import './style.scss'
import PromotionTableRow from "./components/PromotionTableRow";
import tableData from "../../../../constants/tableData.constants";

const PromotionTable = () => {
    return <div className={'promotion-table'}>
        <PromotionTableRow isHeader={true} values={['Категория', 'Подкатегория', 'Бренд', 'Товары', 'Кешбек']}/>
        {tableData.map(({id, category, subCategory, brand, products, cashback}) => <PromotionTableRow key={`row-${id}`}
                                                                                                      id={id}
                                                                                                      values={[category, subCategory, brand, products, cashback]}/>)}
    </div>
}

export default PromotionTable
