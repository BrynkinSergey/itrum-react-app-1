import styles from './style.module.scss'
import ClientsTable from './components/ClientsTable'
import clientsData from '../../constants/clientsData.constants'
import { useEffect, useState } from 'react'
import PaginatonNavbar from '../../components/PaginatonNavbar'
import SearchInput from './components/SearchInput'
import parseClientsData from '../../helpers/parseClientsData.helper'

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
    return ((el.lastName || el.name) && (el.lastName + ' ' + el.name).toLowerCase().includes(lowerFilterMask)) ||
            (el.phone?.toLowerCase().includes(lowerFilterMask)) ||
            (el.email?.toLowerCase().includes(lowerFilterMask))
  }

  useEffect(() => {
    const showFrom = ((currentPage - 1) * paginationValue)
    const showTo = showFrom + paginationValue
    const filteredData = data.filter(filterData)
    setShowedData(filteredData.slice(showFrom, showTo))
    setPagesNumber(Math.ceil(filteredData.length / paginationValue))
  }, [data, paginationValue, currentPage, filterMask])

  const selectChangeHandler = (choice) => {
    setPaginationValue(+choice.target.value)
  }

  return (
        <div className={styles.clientsPage}>
            <div className={styles.searchInputWrapper}>
                <SearchInput width={'320px'} height={'40px'} placeholder={'Поиск'} inputChangeHandler={(value) => {
                  setFilterMask(value)
                }}/>
            </div>
            <PaginatonNavbar currentPage={currentPage} setCurrentPage={setCurrentPage}
                             selectChangeHandler={selectChangeHandler} pagesNumber={pagesNumber}/>
            <ClientsTable data={showedData}/>
        </div>
  )
}

export default ClientsPage
