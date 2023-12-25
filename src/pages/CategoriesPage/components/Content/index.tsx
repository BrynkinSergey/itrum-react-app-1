import styles from './style.module.scss'

import { useState } from 'react'

import { Button, CustomInput } from '../../../../components'
import ContentRow from './components/ContentRow'

import { type ICategory } from '../../../../types/ICategory'

interface IContentProps {
  headerName: string
  data: ICategory[]
  selectedId: string
  contentType?: 'category' | 'subCategory'
  setSelect: (id: string) => void
  handleAddItem: (title: string) => void
  handleDeleteItem: (id: string) => void
}

const Content = ({
  handleAddItem,
  handleDeleteItem,
  setSelect,
  selectedId,
  data = [],
  headerName,
  contentType = 'category'
}: IContentProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleSelect = (id: string) => {
    setSelect(id)
  }

  const handleAdd = () => {
    const value = inputValue.trim()
    setInputValue('')
    if (value) handleAddItem(value)
  }

  return (
    <div className={styles.content}>
      <div className={styles.addSection}>
        <CustomInput value={inputValue} setValue={setInputValue} isFullWidth={true}
                     type={'text'} handleEnter={handleAdd}/>
        <Button text={'Добавить категорию'} handleClick={handleAdd}/>
      </div>
      <div>
        {!data?.length && <p className={styles.emptyContent}>Здесь пока
          нет {contentType === 'subCategory' ? 'подкатегорий' : 'категорий'}</p>}
        {!!data?.length && <ContentRow value={headerName} isHeader={true}/>}
        {data?.map(el => {
          const isSelected = el.id === selectedId
          return <ContentRow handleDelete={() => {
            handleDeleteItem(el.id)
          }
          } handleClick={() => {
            handleSelect(el.id)
          }} isSelected={isSelected}
                             key={`content-row-${el.id}`} value={el.title}/>
        })}
      </div>
    </div>
  )
}

export default Content
