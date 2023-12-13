import './style.scss'
import {useEffect} from "react";
import Button from "../../../../components/Button/Button";
import EditField from "./components/EditField";
import CustomInput from "../../../../components/CustomInput";
import CustomSelect from "../../../../components/CustomSelect";

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
                    <Button style={'outlined'} height={'48px'} width={'272px'} text={'Удалить'}/>
                    <Button height={'48px'} width={'272px'} text={'Сохранить'}/>
                </div>
                <div className={'edit-modal_promo-info font-color--grayspace-text-gray-90 font-size--14'}>
                    <EditField title={'Начисление кешбека с покупки'}>
                        <CustomInput width={'560px'} height={'40px'} defaultValue={'20%'} type={'text'}/>
                    </EditField>

                    <EditField title={'Категория'}>
                        <CustomSelect height={'40px'} width={'560px'} options={[1, 2, 3]} defaultOption={1}/>
                    </EditField>

                    <EditField title={'Подкатегория'}>
                        <CustomSelect height={'40px'} width={'560px'} options={[1, 2, 3]} defaultOption={1}/>
                    </EditField>

                    <EditField title={'Бренд'}>
                        <CustomSelect height={'40px'} width={'560px'} options={[1, 2, 3]} defaultOption={1}/>
                    </EditField>
                </div>
            </div>
            <div className={'edit-modal_background'} onClick={closeHandler}></div>
        </div>
    );
};

export default EditModal;
