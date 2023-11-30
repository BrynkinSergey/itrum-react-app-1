import './style.scss'
import ChangePageBtn from "./components/ChangePageBtn";

const PaginatonNavbar = () => {
    return <div className={'pagination-navbar'}>
        <div className={'pagination-navbar_items-number-block'}></div>
        <div className={'pagination-navbar_pages-navigation-block'}>
            <div className={'pagination-navbar_current-page'}>
                <p className={'font-size--14 font-line-height--20 font-weight--400 font-color--text-main'}>Страница</p>
                <input className={'pagination-navbar_input'}/>
                <p> из 2</p>
            </div>
            <div className={'pagination-navbar_change-page-buttons'}>
                <ChangePageBtn isReversed={true}/>
                <ChangePageBtn/>
            </div>
        </div>
    </div>
}

export default PaginatonNavbar
