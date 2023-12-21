import styles from './style.module.scss'

import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import PaginationNavbar from '../../components/PaginationNavbar'
import PromotionTable from './components/PromotionTable'
import DeleteModal from './components/DeleteModal'
import EditModal from './components/EditModal'

import parseData from '../../helpers/parseData'

import tableData from '../../constants/tableData'

import { type IPromotion } from '../../types/IPromotion'

const emptyNewPromoValue: IPromotion = {
  id: '',
  isChecked: false,
  category: '-',
  subCategory: '-',
  brand: '-',
  products: '-',
  cashback: ''
}

const PromotionPage = () => {
  const [data, setData] = useState<IPromotion[]>([])
  const [showedData, setShowedData] = useState<IPromotion[]>([])
  const [paginationValue, setPaginationValue] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesNumber, setPagesNumber] = useState(0)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editModalValues, setEditModalValues] = useState(emptyNewPromoValue)

  useEffect(() => {
    setData(parseData(tableData))
    const pagesNumber = Math.ceil(tableData.length / paginationValue)
    setPagesNumber(pagesNumber)
    setShowedData(parseData(tableData).slice(0, paginationValue))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [paginationValue])

  useEffect(() => {
    const pagesNumber = Math.ceil(data.length / paginationValue)
    setPagesNumber(pagesNumber)
    if (currentPage > pagesNumber) setCurrentPage(pagesNumber)
  }, [paginationValue, data])

  useEffect(() => {
    if (currentPage < 1) setCurrentPage(1)
    if (currentPage > pagesNumber) setCurrentPage(pagesNumber)
    const showFrom = ((currentPage - 1) * paginationValue)
    const showTo = showFrom + paginationValue
    setShowedData(data.slice(showFrom, showTo))
  }, [paginationValue, currentPage, data])

  const handleSelectChange = (value: string) => {
    setPaginationValue(+value)
  }

  const toggleCheckboxAll = (isChecked: boolean, isSomeChecked: boolean) => {
    const showFrom = ((currentPage - 1) * paginationValue)
    const showTo = showFrom + paginationValue
    setData((prevData) => prevData.slice(showFrom, showTo).map(el => {
      return { ...el, isChecked: !(isChecked || isSomeChecked) }
    }))
  }

  const toggleCheckbox = (id: string) => {
    setData(data => data.map(el => el.id === id ? { ...el, isChecked: !el.isChecked } : el))
  }

  const deleteSelectedRows = () => {
    setData(data.filter(el => !el.isChecked))
  }

  const openEditModal = (values: IPromotion) => {
    setEditModalValues(values)
    setIsEditModalOpen(true)
  }

  const openAddModal = () => {
    setEditModalValues(emptyNewPromoValue)
    setIsEditModalOpen(true)
  }

  const addOrUpdatePromotion = (values: IPromotion) => {
    const { category, subCategory, brand, products, cashback } = values
    let { id } = values

    if (id === '') {
      id = data[data.length - 1].id + 1

      const newPromo = {
        id,
        brand,
        cashback,
        category,
        isChecked: false,
        products,
        subCategory
      }
      setData([...data, newPromo])
    } else {
      const el = data.find(el => el.id === id)
      if (el) {
        el.brand = brand
        el.cashback = cashback
        el.category = category
        el.products = products
        el.subCategory = subCategory

        setData(data)
      }
    }
    setIsEditModalOpen(false)
  }

  return <div
    className={styles.promotionPage}>
    <PaginationNavbar currentPage={currentPage} onChangePage={setCurrentPage}
                      handleSelectChange={handleSelectChange} pagesNumber={pagesNumber}/>
    <div className={styles.btnContainer}>
      <Button text={'Добавить акцию'} handleClick={openAddModal}/>
    </div>
    <PromotionTable toggleCheckboxAll={toggleCheckboxAll}
                    data={showedData} toggleCheckbox={toggleCheckbox}
                    openEditModal={openEditModal}/>
    {data.some(el => el.isChecked) &&
      <DeleteModal handleClick={deleteSelectedRows}
                   numberOfChecked={data.filter(el => el.isChecked).length}/>}
    {isEditModalOpen && <EditModal handleSubmit={addOrUpdatePromotion} values={editModalValues}
                                   handleClose={() => {
                                     setIsEditModalOpen(false)
                                   }}/>}
  </div>
}

export default PromotionPage
