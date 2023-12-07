import './style.scss'
import PromotionTableRow from "./components/PromotionTableRow";
import {useEffect, useState} from "react";

const PromotionTable = ({data, paginationValue, setNumberOfSelectedRows, toggleCheckbox, toggleCheckboxAll}) => {
    const [isAllChecked, setIsAllChecked] = useState(0)
    const [isCheckedList, setIsCheckedList] = useState(new Array(+paginationValue).fill(0))

    useEffect(() => {
        setIsCheckedList(new Array(+paginationValue).fill(0))
        setIsAllChecked(0)
    }, [paginationValue])

    useEffect(() => {
        if (isAllChecked !== 2) {
            setIsCheckedList(new Array(+paginationValue).fill(isAllChecked))
        }
    }, [isAllChecked])

    useEffect(() => {
        const numberOfChecked = isCheckedList.filter(el => el).length
        const numberOfNotChecked = isCheckedList.length - numberOfChecked;

        if (numberOfChecked === isCheckedList.length) {
            setIsAllChecked(1)
        } else if (numberOfNotChecked === isCheckedList.length) {
            setIsAllChecked(0)
        } else {
            setIsAllChecked(2)
        }

        setNumberOfSelectedRows(numberOfChecked)

    }, [isCheckedList])

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
