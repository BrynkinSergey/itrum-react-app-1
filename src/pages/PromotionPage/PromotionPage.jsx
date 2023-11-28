import './PromotionPage.scss'
import Button from "../../components/Button/Button";

const PromotionPage = () => {
    return <div className={'promotion-page'}>
        <div className={'hueta'}></div>
        <div className={'btn-container'}>
            <Button text={'Добавить акцию'}/>
        </div>
        <div className={'table'}></div>
    </div>
}

export default PromotionPage
