import './style.scss'
import PromotionTableRow from "./components/PromotionTableRow";
import {useEffect, useState} from "react";

const PromotionTable = ({data, paginationValue, setNumberOfSelectedRows}) => {

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

    const setIsChecked = (index) => {
        const isCheckedListCopy = [...isCheckedList];
        isCheckedListCopy[index] = +!isCheckedListCopy[index];
        setIsCheckedList(isCheckedListCopy)
    }

    return <div className={'promotion-table'}>
        <PromotionTableRow isChecked={isAllChecked !== 2 && isAllChecked} isSomeChecked={isAllChecked === 2}
                           setIsChecked={setIsAllChecked} isHeader={true}
                           values={['Категория', 'Подкатегория', 'Бренд', 'Товары', 'Кешбек']}/>
        {data.map(({id, category, subCategory, brand, products, cashback}) => <PromotionTableRow key={`row-${id}`}
                                                                                                 isChecked={isCheckedList[id - 1]}
                                                                                                 setIsChecked={setIsChecked}
                                                                                                 id={id}
                                                                                                 values={[category, subCategory, brand, products, cashback]}/>)}
    </div>
}

export default PromotionTable
