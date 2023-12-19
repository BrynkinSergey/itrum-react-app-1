import './style.scss'
import ClientsTable from "./components/ClientsTable";
import clientsData from "../../constants/clientsData.constants";
import {useEffect, useState} from "react";
import PaginatonNavbar from "../PromotionPage/components/PaginatonNavbar";

const ClientsPage = () => {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pagesNumber, setPagesNumber] = useState(1)
    const [paginationValue, setPaginationValue] = useState(10)
    const [showedData, setShowedData] = useState([])

    useEffect(() => {
        setData(clientsData)
    }, [])

    useEffect(() => {
        const showFrom = ((currentPage - 1) * paginationValue);
        const showTo = showFrom + paginationValue;
        setShowedData(data.slice(showFrom, showTo));
        setPagesNumber(Math.ceil(data.length / paginationValue))
    }, [data, paginationValue, currentPage])

    const selectChangeHandler = (choice) => {
        setPaginationValue(+choice.target.value)
    }

    return (
        <div>
            <PaginatonNavbar currentPage={currentPage} setCurrentPage={setCurrentPage}
                             selectChangeHandler={selectChangeHandler} pagesNumber={pagesNumber}/>
            <ClientsTable data={showedData}/>
        </div>
    );
};

export default ClientsPage;
