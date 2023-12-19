import './style.scss'
import ClientsTable from "./components/ClientsTable";
import clientsData from "../../constants/clientsData.constants";
import {useEffect, useState} from "react";
import PaginatonNavbar from "../../components/PaginatonNavbar";
import SearchInput from "./components/SearchInput";
import parseClientsData from "../../helpers/parseClientsData.helper";

const ClientsPage = () => {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pagesNumber, setPagesNumber] = useState(1)
    const [paginationValue, setPaginationValue] = useState(10)
    const [showedData, setShowedData] = useState([])
    const [filterMask, setFilterMask] = useState('')

    useEffect(() => {
        setData(parseClientsData(clientsData))
    }, [])

    const filterData = (el) => {
        const lowerFilterMask = filterMask.toLowerCase()
        return (el.name && el.name.toLowerCase().includes(lowerFilterMask))
            || (el.lastName && el.lastName.toLowerCase().includes(lowerFilterMask))
            || (el.phone && el.phone.toLowerCase().includes(lowerFilterMask))
            || (el.email && el.email.toLowerCase().includes(lowerFilterMask))
    }

    useEffect(() => {
        const showFrom = ((currentPage - 1) * paginationValue);
        const showTo = showFrom + paginationValue;
        const filteredData = data.filter(filterData)
        setShowedData(filteredData.slice(showFrom, showTo));
        setPagesNumber(Math.ceil(filteredData.length / paginationValue))
    }, [data, paginationValue, currentPage, filterMask])

    const selectChangeHandler = (choice) => {
        setPaginationValue(+choice.target.value)
    }

    return (
        <div className={'clients-page'}>
            <div className={'search-input_wrapper'}>
                <SearchInput width={'320px'} height={'40px'} placeholder={'Поиск'} inputChangeHandler={(value) => {
                    setFilterMask(value)
                }}/>
            </div>
            <PaginatonNavbar currentPage={currentPage} setCurrentPage={setCurrentPage}
                             selectChangeHandler={selectChangeHandler} pagesNumber={pagesNumber}/>
            <ClientsTable data={showedData}/>
        </div>
    );
};

export default ClientsPage;
