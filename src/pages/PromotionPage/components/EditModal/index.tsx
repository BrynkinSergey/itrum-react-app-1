import styles from './style.module.scss'

import { useEffect, useState } from 'react'

import EditField from './components/EditField'
import { Button, CustomInput, CustomSelect } from '../../../../components'

import {
  selectorBrands,
  selectorCategories,
  selectorProducts,
  selectorSubCategories
} from '../../../../constants/selectorsValues'

import { type IPromotion } from '../../../../types/IPromotion'

interface IEditModalProps {
  handleClose: () => void
  handleSubmit: (values: IPromotion) => void
  values: IPromotion
}

const EditModal = ({ handleClose, handleSubmit, values }: IEditModalProps) => {
  const [cashback, setCashback] = useState(values.cashback)
  const [category, setCategory] = useState(values.category)
  const [subCategory, setSubCategory] = useState(values.subCategory)
  const [brand, setBrand] = useState(values.brand)
  const [products, setProducts] = useState(values.products)

  const parseCashback = (value: string) => {
    let newValue = +(value.trim())
    newValue = newValue || 0
    return newValue + '%'
  }

  useEffect(() => {
    const close = (e: WindowEventMap['keydown']) => {
      if (e.code === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', close)
    return () => {
      window.removeEventListener('keydown', close)
    }
  }, [])

  return (
    <div className={styles.editModal}>
      <div className={styles.content}>
        <div className={styles.buttons}>
          <div className={styles.buttonWrapper}>
            <Button style={'outlined'} text={'Удалить'}/>
          </div>
          <div className={styles.buttonWrapper}>
            <Button handleClick={() => {
              const submitData: IPromotion = {
                id: values.id,
                isChecked: values.isChecked,
                cashback,
                category,
                subCategory,
                brand,
                products
              }
              handleSubmit(submitData)
            }} text={'Сохранить'}/>
          </div>
        </div>
        <div className={styles.promoInfo}>
          <EditField title={'Начисление кешбека с покупки'}>
            <CustomInput type={'number'}
                         defaultValue={+(cashback.split('%')[0])}
                         handleChange={value => {
                           setCashback(parseCashback(value))
                         }}
            />
          </EditField>

          <EditField title={'Категория'}>
            <CustomSelect isFixed={true} options={selectorCategories}
                          defaultOption={values.category}
                          handleChange={choice => {
                            setCategory(choice)
                          }}/>
          </EditField>

          <EditField title={'Подкатегория'}>
            <CustomSelect isFixed={true} options={selectorSubCategories}
                          defaultOption={values.subCategory}
                          handleChange={choice => {
                            setSubCategory(choice)
                          }}/>
          </EditField>

          <EditField title={'Бренд'}>
            <CustomSelect isFixed={true} options={selectorBrands}
                          defaultOption={values.brand}
                          handleChange={choice => {
                            setBrand(choice)
                          }}/>
          </EditField>

          <EditField title={'Товар'}>
            <CustomSelect isFixed={true} options={selectorProducts}
                          defaultOption={values.products}
                          handleChange={(choice) => {
                            setProducts(choice)
                          }}/>
          </EditField>
        </div>
      </div>
      <div className={styles.background} onClick={handleClose}></div>
    </div>
  )
}

export default EditModal
