import './style.scss'
import ChangePageBtn from "./components/ChangePageBtn";
import CustomSelect from "../../../../components/CustomSelect";

const PaginatonNavbar = ({selectChangeHandler, pagesNumber, currentPage, setCurrentPage}) => {
    const inputChangeHandler = (e) => {
        const newValue = e.target.value
        setCurrentPage(newValue)
    }

    return <div className={'pagination-navbar'}>
        <div className={'pagination-navbar_items-number-block'}>
            <p className={'font-color--text-main font-size--14 font-line-height--20 font-weight--400'}>Показывать</p>
            <div className={'pagination-navbar_custom-select-wrapper'}>
                <CustomSelect selectChangeHandler={selectChangeHandler} options={[5, 10, 20]} defaultOption={10}/>
            </div>
        </div>
        <div className={'pagination-navbar_current-page'}>
            <p className={'font-size--14 font-line-height--20 font-weight--400 font-color--text-main'}>Страница</p>
            <div className={'pagination-navbar_input-wrapper'}>
                <input type={'number'} value={currentPage} className={'pagination-navbar_input'}
                       onChange={inputChangeHandler}/>
                <p className={'font-color--text-disable font-size--14 font-line-height--20 font-weight--400'}> из {pagesNumber}</p>
            </div>
        </div>
        <div className={'pagination-navbar_change-page-buttons'}>
            <ChangePageBtn isDisabled={currentPage === 1} isReversed={true}
                           onClickHandler={() => setCurrentPage((prev) => +prev - 1)}/>
            <ChangePageBtn isDisabled={currentPage === pagesNumber}
                           onClickHandler={() => setCurrentPage((prev) => +prev + 1)}/>
        </div>
    </div>
}

export default PaginatonNavbar
