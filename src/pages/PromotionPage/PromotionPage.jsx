import './PromotionPage.scss'
import Button from "../../components/Button/Button";
import PaginatonNavbar from "./components/PaginatonNavbar";
import PromotionTable from "./components/PromotionTable";
import {useEffect, useState} from "react";
import tableData from "../../constants/tableData.constants";
import parseData from "../../helpers/parseData";

const PromotionPage = () => {
    const [data, setData] = useState([])
    const [showedData, setShowedData] = useState([])
    const [paginationValue, setPaginationValue] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [pagesNumber, setPagesNumber] = useState(0)

    useEffect(() => {
        setData(parseData(tableData))
        const pagesNumber = Math.ceil(tableData.length / paginationValue)
        setPagesNumber(pagesNumber)
        setShowedData(tableData.slice(0, paginationValue))
    }, [])

    useEffect(() => {
        const pagesNumber = Math.ceil(data.length / paginationValue)
        setCurrentPage(1)
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
    return <div
        className={'promotion-page'}>
        <PaginatonNavbar currentPage={currentPage} setCurrentPage={setCurrentPage}
                         selectChangeHandler={selectChangeHandler} pagesNumber={pagesNumber}/>
        <div className={'btn-container'}>
            <Button text={'Добавить акцию'}/>
        </div>
        <PromotionTable paginationValue={paginationValue} data={showedData}/>
    </div>
}

export default PromotionPage
