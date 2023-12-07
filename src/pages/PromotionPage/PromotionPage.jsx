import './PromotionPage.scss'
import Button from "../../components/Button/Button";
import PaginatonNavbar from "./components/PaginatonNavbar";
import PromotionTable from "./components/PromotionTable";
import {useEffect, useState} from "react";
import tableData from "../../constants/tableData.constants";
import parseData from "../../helpers/parseData";
import DeleteModal from "./components/DeleteModal";

const PromotionPage = () => {
    const [data, setData] = useState([])
    const [showedData, setShowedData] = useState([])
    const [paginationValue, setPaginationValue] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [pagesNumber, setPagesNumber] = useState(0)
    const [numberOfSelectedRows, setNumberOfSelectedRows] = useState(false)

    useEffect(() => {
        setData(parseData(tableData))
        const pagesNumber = Math.ceil(tableData.length / paginationValue)
        setPagesNumber(pagesNumber)
        setShowedData(tableData.slice(0, paginationValue))
    }, [])

    useEffect(() => {
        const pagesNumber = Math.ceil(data.length / paginationValue)
        setPagesNumber(pagesNumber);
    }, [paginationValue, data])

    useEffect(() => {
        if (!currentPage) return
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

    return <div
        className={'promotion-page'}>
        <PaginatonNavbar currentPage={currentPage} setCurrentPage={setCurrentPage}
                         selectChangeHandler={selectChangeHandler} pagesNumber={pagesNumber}/>
        <div className={'btn-container'}>
            <Button text={'Добавить акцию'}/>
        </div>
        <PromotionTable toggleCheckboxAll={toggleCheckboxAll} setNumberOfSelectedRows={setNumberOfSelectedRows}
                        paginationValue={paginationValue}
                        data={showedData} toggleCheckbox={toggleCheckbox}/>
        {data.some(el => el.isChecked) ? <DeleteModal numberOfChecked={data.filter(el => el.isChecked).length}/> : ''}
    </div>
}

export default PromotionPage
