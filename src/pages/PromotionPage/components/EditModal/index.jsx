import './style.scss'
import {useEffect} from "react";
import Button from "../../../../components/Button/Button";

const EditModal = ({closeHandler}) => {
    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                closeHandler()
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])

    return (
        <div className={'edit-modal'}>
            <div className={'edit-modal_content'}>
                <div className={'edit-modal_buttons'}>
                    <Button height={'48px'} width={'272px'} text={'Удалить'}/>
                    <Button height={'48px'} width={'272px'} text={'Сохранить'}/>
                </div>
                <div className={'edit-modal_promo-info'}></div>
            </div>
            <div className={'edit-modal_background'} onClick={closeHandler}></div>
        </div>
    );
};

export default EditModal;
