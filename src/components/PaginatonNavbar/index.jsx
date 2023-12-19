import './style.scss'
import ChangePageBtn from "./components/ChangePageBtn";
import CustomSelect from "../CustomSelect";
import {useEffect, useState} from "react";

const PaginatonNavbar = ({selectChangeHandler, pagesNumber, currentPage, setCurrentPage}) => {
    const [curPage, setCurPage] = useState(currentPage)

    useEffect(() => {
        setCurPage(currentPage)
    }, [currentPage])

    const inputChangeHandler = (value) => {
        let newValue = value
        if (newValue < 1) newValue = 1;
        if (newValue > pagesNumber) newValue = pagesNumber;
        setCurrentPage(newValue)
        setCurPage(newValue)
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) e.target.blur();
    }

    return <div className={'pagination-navbar'}>
        <div className={'pagination-navbar_items-number-block'}>
            <p className={'font-color--text-main font-size--14 font-line-height--20 font-weight--400'}>Показывать</p>
            <div className={'pagination-navbar_custom-select-wrapper'}>
                <CustomSelect selectChangeHandler={selectChangeHandler} options={[10, 20, 50]} defaultOption={10}/>
            </div>
        </div>
        <div className={'pagination-navbar_current-page'}>
            <p className={'font-size--14 font-line-height--20 font-weight--400 font-color--text-main'}>Страница</p>
            <div className={'pagination-navbar_input-wrapper'}>
                <input type={'number'} value={curPage} className={'pagination-navbar_input'}
                       onChange={(e) => setCurPage(e.target.value)}
                       onBlur={(e) => inputChangeHandler(e.target.value)}
                       onKeyDown={(e) => handleKeyPress(e)}/>
                <p className={'font-color--text-disable font-size--14 font-line-height--20 font-weight--400'}> из {pagesNumber}</p>
            </div>
        </div>
        <div className={'pagination-navbar_change-page-buttons'}>
            <ChangePageBtn isDisabled={currentPage === 1} isReversed={true}
                           onClickHandler={() => inputChangeHandler(curPage - 1)}/>
            <ChangePageBtn isDisabled={currentPage === pagesNumber}
                           onClickHandler={() => inputChangeHandler(curPage + 1)}/>
        </div>
    </div>
}

export default PaginatonNavbar
