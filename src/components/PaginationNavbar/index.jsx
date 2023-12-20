import styles from './style.module.scss'
import ChangePageBtn from './components/ChangePageBtn'
import CustomSelect from '../CustomSelect'
import { useEffect, useState } from 'react'

const PaginationNavbar = ({ selectChangeHandler, pagesNumber, currentPage, setCurrentPage }) => {
  const [curPage, setCurPage] = useState(currentPage)

  useEffect(() => {
    setCurPage(currentPage)
  }, [currentPage])

  const inputChangeHandler = (value) => {
    let newValue = value
    if (newValue < 1) newValue = 1
    if (newValue > pagesNumber) newValue = pagesNumber
    setCurrentPage(newValue)
    setCurPage(newValue)
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) e.target.blur()
  }

  return <div className={styles.paginationNavbar}>
        <div className={styles.itemsNumberBlock}>
            <p className={styles.mainText}>Показывать</p>
            <div className={styles.selectWrapper}>
                <CustomSelect selectChangeHandler={selectChangeHandler} options={[10, 20, 50]} defaultOption={10}/>
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
                         inputChangeHandler(e.target.value)
                       }}
                       onKeyDown={(e) => {
                         handleKeyPress(e)
                       }}/>
                <p className={styles.disabledText}> из {pagesNumber}</p>
            </div>
        </div>
        <div className={styles.changePageButtons}>
            <ChangePageBtn isDisabled={currentPage === 1} isReversed={true}
                           onClickHandler={() => {
                             inputChangeHandler(curPage - 1)
                           }}/>
            <ChangePageBtn isDisabled={currentPage === pagesNumber}
                           onClickHandler={() => {
                             inputChangeHandler(curPage + 1)
                           }}/>
        </div>
    </div>
}

export default PaginationNavbar
