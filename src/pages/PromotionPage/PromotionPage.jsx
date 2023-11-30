import './PromotionPage.scss'
import Button from "../../components/Button/Button";
import PaginatonNavbar from "./components/PaginatonNavbar";
import PromotionTable from "./components/PromotionTable";

const PromotionPage = () => (
    <div
        className={'promotion-page'}>
        <PaginatonNavbar/>
        <div className={'btn-container'}>
            <Button text={'Добавить акцию'}/>
        </div>
        <PromotionTable/>
    </div>
)

export default PromotionPage
