import './PromotionPage.scss'
import Button from "../../components/Button/Button";
import PaginatonNavbar from "../../components/PaginatonNavbar";
import PromotionTable from "./components/PromotionTable";
import {useEffect, useState} from "react";
import tableData from "../../constants/tableData.constants";
import parseData from "../../helpers/parseData";
import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/EditModal";

const PromotionPage = () => {
    const emptyNewPromoValue = {
        id: null,
        isChecked: false,
        category: '-',
        subCategory: '-',
        brand: '-',
        products: '-',
        cashback: ''
    }

    const [data, setData] = useState([])
    const [showedData, setShowedData] = useState([])
    const [paginationValue, setPaginationValue] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [pagesNumber, setPagesNumber] = useState(0)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    // const [editModalValues, setEditModalValues] = useState([0, 0, 0, 0, 0])
    const [editModalValues, setEditModalValues] = useState(emptyNewPromoValue)

    useEffect(() => {
        setData(parseData(tableData))
        const pagesNumber = Math.ceil(tableData.length / paginationValue)
        setPagesNumber(pagesNumber)
        setShowedData(tableData.slice(0, paginationValue))
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [paginationValue])

    useEffect(() => {
        const pagesNumber = Math.ceil(data.length / paginationValue)
        setPagesNumber(pagesNumber);
        if (currentPage > pagesNumber) setCurrentPage(pagesNumber)
    }, [paginationValue, data])

    useEffect(() => {
        if (currentPage < 1) setCurrentPage(1)
        if (currentPage > pagesNumber) setCurrentPage(pagesNumber)
        const showFrom = ((currentPage - 1) * paginationValue);
        const showTo = showFrom + paginationValue;
        setShowedData(data.slice(showFrom, showTo))
    }, [paginationValue, currentPage, data])


    const selectChangeHandler = (choice) => {
        setPaginationValue(+choice.target.value)
    }

    const toggleCheckboxAll = (isChecked, isSomeChecked) => {
        const showFrom = ((currentPage - 1) * paginationValue);
        const showTo = showFrom + paginationValue;
        data.slice(showFrom, showTo).forEach(el => el.isChecked = !(isChecked || isSomeChecked))
        setData([...data])
    }

    const toggleCheckbox = (id) => {
        const el = data.find(el => el.id === id)
        el.isChecked = !el.isChecked;
        setData([...data])
    }

    const deleteSelectedRows = () => {
        setData(data.filter(el => !el.isChecked))
    }

    const openEditModal = (values) => {
        setEditModalValues(values);
        setIsEditModalOpen(true);
    }

    const openAddModal = () => {
        setEditModalValues(emptyNewPromoValue);
        setIsEditModalOpen(true)
    }

    const addOrUpdatePromotion = (values) => {
        const {category, subCategory, brand, products, cashback} = values
        let {id} = values;

        if (id === null) {
            id = data[data.length - 1].id + 1

            const newPromo = {
                id: id,
                brand: brand,
                cashback: cashback,
                category: category,
                isChecked: false,
                products: products,
                subCategory: subCategory
            }
            setData([...data, newPromo])
        } else {
            const el = data.find(el => el.id === id)
            el.brand = brand
            el.cashback = cashback
            el.category = category
            el.products = products
            el.subCategory = subCategory

            setData(data)
        }
        setIsEditModalOpen(false)
    }

    return <div
        className={'promotion-page'}>
        <PaginatonNavbar currentPage={currentPage} setCurrentPage={setCurrentPage}
                         selectChangeHandler={selectChangeHandler} pagesNumber={pagesNumber}/>
        <div className={'btn-container'} onClick={openAddModal}>
            <Button text={'Добавить акцию'}/>
        </div>
        <PromotionTable toggleCheckboxAll={toggleCheckboxAll}
                        data={showedData} toggleCheckbox={toggleCheckbox}
                        openEditModal={openEditModal}/>
        {data.some(el => el.isChecked) &&
            <DeleteModal deleteHandler={deleteSelectedRows}
                         numberOfChecked={data.filter(el => el.isChecked).length}/>}
        {isEditModalOpen && <EditModal handleSubmit={addOrUpdatePromotion} values={editModalValues}
                                       closeHandler={() => setIsEditModalOpen(false)}/>}
    </div>
}

export default PromotionPage
