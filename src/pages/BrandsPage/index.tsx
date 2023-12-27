import styles from './style.module.scss'
import BrandRow from './components/BrandRow'
import { Button, CustomInput } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { type IBrandsState } from '../../types/store'
import { addBrandAction, updateBrandAction } from '../../store/brandsReducer'
import BrandHeader from './components/BrandHeader'
import { useState } from 'react'
import DeleteModal from './components/DeleteModal'
import FileInput from './components/FileInput'

const BrandsPage = () => {
  const [textInput, setTextInput] = useState('')
  const [toDeleteBrandId, setToDeleteBrandId] = useState('')
  const [toDeleteBrandName, setToDeleteBrandName] = useState('')
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const brands = useSelector((state: { brand: IBrandsState }) => state.brand.brands)
  const dispatch = useDispatch()

  const addItem = () => {
    const validatedText = textInput.trim()
    if (validatedText) {
      dispatch(addBrandAction({ name: validatedText, logo: selectedImage }))
    }
    setTextInput('')
    setSelectedImage(null)
  }

  const editItem = (id: string, name: string, logo: File | null) => {
    dispatch(updateBrandAction({ id, name, logo }))
  }

  return (
    <div className={styles.brandsPage}>
      <div className={styles.controlPanel}>
        <CustomInput placeholder={'Введите название бренда'} isFullWidth={true} type={'text'} value={textInput}
                     setValue={setTextInput}/>
        <div className={styles.fullWidthWrapper}>
          <FileInput fileName={selectedImage?.name ?? ''} handleFile={setSelectedImage}/>
          <p className={styles.text}>Размер логотипа 500x500 px PNG, JPG, JPEG</p>
        </div>
        <Button text={'Добавить бренд'} handleClick={addItem}/>
      </div>
      <div className={`${styles.fullWidthWrapper}`}>
        <BrandHeader values={['Логотип бренда', 'Название бренда']}/>
      </div>
      <div className={`${styles.fullWidthWrapper} ${styles.scrollable}`}>
        {brands.map(el => <BrandRow value={el.name}
                                    logo={el.logo}
                                    key={`brand-row-${el.id}`}
                                    handleEdit={(name, logo) => {
                                      editItem(el.id, name, logo)
                                    }}
                                    handleDelete={() => {
                                      setToDeleteBrandId(el.id)
                                      setToDeleteBrandName(el.name)
                                    }}/>)}
      </div>
      {!brands.length && <p>Здесь пока нет брендов</p>}
      {!!toDeleteBrandId.length && <DeleteModal text={toDeleteBrandName} id={toDeleteBrandId} handleCancel={() => {
        setToDeleteBrandId('')
        setToDeleteBrandName('')
      }}/>}
    </div>
  )
}

export default BrandsPage
