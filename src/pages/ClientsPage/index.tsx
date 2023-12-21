import styles from './style.module.scss'
import ClientsTable from './components/ClientsTable'
import clientsData from '../../constants/clientsData'
import { useEffect, useState } from 'react'
import PaginationNavbar from '../../components/PaginationNavbar'
import SearchInput from './components/SearchInput'
import parseClientsData from '../../helpers/parseClientsData'
import { type IClient } from '../../types/IClient'

const ClientsPage = () => {
  const [data, setData] = useState<IClient[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesNumber, setPagesNumber] = useState(1)
  const [paginationValue, setPaginationValue] = useState(10)
  const [showedData, setShowedData] = useState<IClient[]>([])
  const [filterMask, setFilterMask] = useState('')

  useEffect(() => {
    setData(parseClientsData(clientsData))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [paginationValue])

  const filterData = (el: IClient) => {
    const lowerFilterMask = filterMask.toLowerCase()
    const fullName = `${el.lastName ?? ''} ${el.name ?? ''}`.trim().toLowerCase()
    return fullName.includes(lowerFilterMask) ??
      (el.phone?.toLowerCase().includes(lowerFilterMask)) ??
      (el.email?.toLowerCase().includes(lowerFilterMask))
  }

  useEffect(() => {
    const showFrom = ((currentPage - 1) * paginationValue)
    const showTo = showFrom + paginationValue
    const filteredData = data.filter(filterData)
    setShowedData(filteredData.slice(showFrom, showTo))
    setPagesNumber(Math.ceil(filteredData.length / paginationValue))
  }, [data, paginationValue, currentPage, filterMask])

  const handleSelectChange = (value: string) => {
    setPaginationValue(+value)
  }

  return (
    <div className={styles.clientsPage}>
      <div className={styles.searchInputWrapper}>
        <SearchInput placeholder={'Поиск'}
                     handleChange={(value: string) => {
                       setFilterMask(value)
                     }}/>
      </div>
      <PaginationNavbar currentPage={currentPage} setCurrentPage={setCurrentPage}
                        handleSelectChange={handleSelectChange} pagesNumber={pagesNumber}/>
      <ClientsTable data={showedData}/>
    </div>
  )
}

export default ClientsPage
