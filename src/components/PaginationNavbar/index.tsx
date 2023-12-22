import styles from './style.module.scss'

import React, { useRef } from 'react'

import { CustomSelect } from '../'
import ChangePageBtn from './components/ChangePageBtn'

interface IPaginationNavbarProps {
  handleSelectChange: (value: string) => void
  pagesNumber: number
  currentPage: number
  onChangePage: (page: number) => void
}

const PaginationNavbar = ({ handleSelectChange, pagesNumber, currentPage, onChangePage }: IPaginationNavbarProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (value: number) => {
    let newValue = value
    if (newValue < 1) newValue = 1
    if (newValue > pagesNumber) newValue = pagesNumber
    onChangePage(newValue)
    if (inputRef.current) {
      inputRef.current.value = newValue.toString()
    }
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
        <input ref={inputRef} type={'number'} defaultValue={currentPage} className={styles.input}
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
