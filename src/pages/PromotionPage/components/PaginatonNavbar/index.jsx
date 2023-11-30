import './style.scss'
import ChangePageBtn from "./components/ChangePageBtn";
import CustomSelect from "../../../../components/CustomSelect";

const PaginatonNavbar = () => {
    return <div className={'pagination-navbar'}>
        <div className={'pagination-navbar_items-number-block'}>
            <p className={'font-color--text-main font-size--14 font-line-height--20 font-weight--400'}>Показывать</p>
            <div className={'pagination-navbar_custom-select-wrapper'}>
                <CustomSelect options={[5, 10, 20]} defaultOption={10}/>
            </div>
        </div>
        <div className={'pagination-navbar_current-page'}>
            <p className={'font-size--14 font-line-height--20 font-weight--400 font-color--text-main'}>Страница</p>
            <div className={'pagination-navbar_input-wrapper'}>
                <input type={'number'} defaultValue={1} className={'pagination-navbar_input'}/>
                <p className={'font-color--text-disable font-size--14 font-line-height--20 font-weight--400'}> из
                    1</p>
            </div>
        </div>
        <div className={'pagination-navbar_change-page-buttons'}>
            <ChangePageBtn isReversed={true}/>
            <ChangePageBtn/>
        </div>
    </div>
}

export default PaginatonNavbar
