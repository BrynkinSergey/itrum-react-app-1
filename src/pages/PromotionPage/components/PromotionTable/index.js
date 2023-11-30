import './style.scss'
import CustomCheckbox from "./components/CustomCheckbox";

const PromotionTable = () => {
    return <div className={'promotion-table'}>
        <div
            className={'promotion-table_header font-color--grayspace-text-gray-70 font-size--14 font-line-height--24 font-weight--500'}>
            <CustomCheckbox/>
            <p>Категория</p>
            <p>Подкатегория</p>
            <p>Бренд</p>
            <p>Товары</p>
            <p>Кешбек</p>
        </div>
        <div className={'promotion-table_content'}></div>
    </div>
}

export default PromotionTable
