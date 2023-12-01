import './style.scss'
import PromotionTableRow from "./components/PromotionTableRow";
import {useEffect, useState} from "react";

const PromotionTable = ({data, paginationValue}) => {

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
        const isEveryChecked = isCheckedList.every(el => el);
        const isEveryNotChecked = isCheckedList.every(el => !el);
        if (isEveryChecked) {
            setIsAllChecked(1)
        }
        if (isEveryNotChecked) {
            setIsAllChecked(0)
        }
        if (!isEveryChecked && !isEveryNotChecked) {
            setIsAllChecked(2)
        }

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
