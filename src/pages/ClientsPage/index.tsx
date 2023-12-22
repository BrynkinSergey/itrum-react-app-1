import styles from './style.module.scss'

import { useEffect, useState } from 'react'

import ClientsTable from './components/ClientsTable'
import { PaginationNavbar } from '../../components'
import SearchInput from './components/SearchInput'

import parseClientsData from '../../helpers/parseClientsData'

import clientsData from '../../constants/clientsData'

import { type IClient } from '../../types/IClient'

const ClientsPage = () => {
  const [data, setData] = useState<IClient[]>([])
  const [showedData, setShowedData] = useState<IClient[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesNumber, setPagesNumber] = useState(1)
  const [paginationValue, setPaginationValue] = useState(10)
  const [filterMask, setFilterMask] = useState('')

  const isClientMatchesFilterMask = (client: IClient) => {
    const lowerFilterMask = filterMask.toLowerCase()
    const fullName = `${client.lastName ?? ''} ${client.name ?? ''}`.trim().toLowerCase()

    return fullName.includes(lowerFilterMask) ??
      (client.phone?.toLowerCase().includes(lowerFilterMask)) ??
      (client.email?.toLowerCase().includes(lowerFilterMask))
  }

  const handleSelectChange = (value: string) => {
    setPaginationValue(+value)
  }

  const handleBlur = (value: string) => {
    setFilterMask(value)
  }

  useEffect(() => {
    setData(parseClientsData(clientsData))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [paginationValue])

  useEffect(() => {
    const showFrom = ((currentPage - 1) * paginationValue)
    const showTo = showFrom + paginationValue
    const filteredData = data.filter(isClientMatchesFilterMask)
    setShowedData(filteredData.slice(showFrom, showTo))
    setPagesNumber(Math.ceil(filteredData.length / paginationValue))
  }, [data, paginationValue, currentPage, filterMask])

  return (
    <div className={styles.clientsPage}>
      <SearchInput placeholder={'Поиск'} handleBlur={handleBlur}/>
      <PaginationNavbar currentPage={currentPage} onChangePage={setCurrentPage}
                        handleSelectChange={handleSelectChange} pagesNumber={pagesNumber}/>
      <ClientsTable data={showedData}/>
    </div>
  )
}

export default ClientsPage
