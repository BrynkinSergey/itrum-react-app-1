import styles from './style.module.scss'
import ChangePageBtn from './components/ChangePageBtn'
import CustomSelect from '../CustomSelect'
import React, { useEffect, useState } from 'react'

interface IPaginationNavbarProps {
  handleSelectChange: (value: string) => void
  pagesNumber: number
  currentPage: number
  setCurrentPage: (page: number) => void
}

const PaginationNavbar = ({ handleSelectChange, pagesNumber, currentPage, setCurrentPage }: IPaginationNavbarProps) => {
  const [curPage, setCurPage] = useState(currentPage.toString())

  useEffect(() => {
    setCurPage(currentPage.toString())
  }, [currentPage])

  const handleInputChange = (value: number) => {
    let newValue = value
    if (newValue < 1) newValue = 1
    if (newValue > pagesNumber) newValue = pagesNumber
    setCurrentPage(newValue)
    setCurPage(newValue.toString())
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const target = e.target as HTMLInputElement
      target.blur()
    }
  }

  return <div className={styles.paginationNavbar}>
    <div className={styles.itemsNumberBlock}>
      <p className={styles.mainText}>Показывать</p>
      <div className={styles.selectWrapper}>
        <CustomSelect handleChange={handleSelectChange} options={['10', '20', '50']} defaultOption={'10'}/>
      </div>
    </div>
    <div className={styles.currentPage}>
      <p className={styles.mainText}>Страница</p>
      <div className={styles.inputWrapper}>
        <input type={'number'} value={curPage} className={styles.input}
               onChange={(e) => {
                 setCurPage(e.target.value)
               }}
               onBlur={(e) => {
                 handleInputChange(+e.target.value)
               }}
               onKeyDown={(e) => {
                 handleKeyPress(e)
               }}/>
        <p className={styles.disabledText}> из {pagesNumber}</p>
      </div>
    </div>
    <div className={styles.changePageButtons}>
      <ChangePageBtn isDisabled={currentPage === 1} isReversed={true}
                     handleClick={() => {
                       handleInputChange(currentPage - 1)
                     }}/>
      <ChangePageBtn isDisabled={currentPage === pagesNumber}
                     handleClick={() => {
                       handleInputChange(currentPage + 1)
                     }}/>
    </div>
  </div>
}

export default PaginationNavbar
