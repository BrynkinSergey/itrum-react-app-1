import './style.scss'
import {useEffect, useState} from "react";
import Button from "../../../../components/Button/Button";
import EditField from "./components/EditField";
import CustomInput from "../../../../components/CustomInput";
import CustomSelect from "../../../../components/CustomSelect";
import {
    selectorBrands,
    selectorCategories,
    selectorProducts,
    selectorSubCategories
} from "../../../../constants/selectors-values.constants";

const EditModal = ({closeHandler, handleSubmit, values}) => {

    const [cashback, setCashback] = useState(values.cashback)
    const [category, setCategory] = useState(values.category)
    const [subCategory, setSubCategory] = useState(values.subCategory)
    const [brand, setBrand] = useState(values.brand)
    const [products, setProducts] = useState(values.products)

    const parseCashback = (value) => {
        let newValue = +(value.trim())
        newValue = newValue ? newValue : 0
        return newValue + '%'
    }

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
                    <Button handleClick={() => handleSubmit(
                        {
                            id: values.id,
                            cashback: cashback,
                            category: category,
                            subCategory: subCategory,
                            brand: brand,
                            products: products,
                        }
                    )} height={'48px'} width={'272px'}
                            text={'Сохранить'}/>
                </div>
                <div className={'edit-modal_promo-info font-color--grayspace-text-gray-90 font-size--14'}>
                    <EditField title={'Начисление кешбека с покупки'}>
                        <CustomInput width={'560px'} height={'40px'}
                                     type={'number'}
                                     defaultValue={+cashback.split('%')[0]}
                                     inputChangeHandler={value => setCashback(parseCashback(value))}
                        />
                    </EditField>

                    <EditField title={'Категория'}>
                        <CustomSelect height={'40px'} width={'560px'} options={selectorCategories}
                                      defaultOption={values[0]}
                                      selectChangeHandler={choice => setCategory(choice.target.value)}/>
                    </EditField>

                    <EditField title={'Подкатегория'}>
                        <CustomSelect height={'40px'} width={'560px'} options={selectorSubCategories}
                                      defaultOption={values[1]}
                                      selectChangeHandler={choice => setSubCategory(choice.target.value)}/>
                    </EditField>

                    <EditField title={'Бренд'}>
                        <CustomSelect height={'40px'} width={'560px'} options={selectorBrands}
                                      defaultOption={values[2]}
                                      selectChangeHandler={choice => setBrand(choice.target.value)}/>
                    </EditField>

                    <EditField title={'Товар'}>
                        <CustomSelect height={'40px'} width={'560px'} options={selectorProducts}
                                      defaultOption={values[2]}
                                      selectChangeHandler={choice => setProducts(choice.target.value)}/>
                    </EditField>
                </div>
            </div>
            <div className={'edit-modal_background'} onClick={closeHandler}></div>
        </div>
    );
};

export default EditModal;
