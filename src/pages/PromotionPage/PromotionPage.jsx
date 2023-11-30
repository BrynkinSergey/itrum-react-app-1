import './PromotionPage.scss'
import Button from "../../components/Button/Button";
import PaginatonNavbar from "./components/PaginatonNavbar";

const PromotionPage = () => (
    <div className={'promotion-page'}>
        <PaginatonNavbar/>
        <div className={'btn-container'}>
            <Button text={'Добавить акцию'}/>
        </div>
        <div className={'table'}></div>
    </div>
)

export default PromotionPage
