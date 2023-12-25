import styles from './style.module.scss'

import { useEffect, useState } from 'react'

import Content from './components/Content'

import { type ICategory } from '../../types/ICategory'

import { ReactComponent as Arrow } from '../../images/icons/double-arrows.svg'
import uuid from 'uuidv4'

const CategoriesPage = () => {
  const [categories, setCategories] = useState<ICategory[]>([])
  const [subCategories, setSubCategories] = useState<ICategory[]>([])
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState('')

  const addCategory = (title: string) => {
    setCategories(prev => {
      return [...prev, { id: uuid(), title, descendants: [] }]
    })
  }

  const addSubCategory = (title: string) => {
    setCategories(prev => {
      return prev.map(category => {
        if (category.id !== selectedCategoryId) return category
        else {
          let descendants: ICategory[] = []
          if (category.descendants) {
            descendants = category.descendants
          }
          return {
            id: category.id,
            title: category.title,
            descendants: [...descendants, { id: uuid(), title }] as ICategory[]
          }
        }
      })
    })
  }

  const deleteCategory = (id: string) => {
    setCategories(prev => {
      return prev.filter(el => el.id !== id)
    })
  }

  const deleteSubCategory = (id: string) => {
    setCategories(prev => {
      return prev.map(el => {
        return {
          ...el,
          descendants: el.descendants?.filter(des => des.id !== id)
        }
      })
    })
  }

  useEffect(() => {
    const jsonData = localStorage.getItem('categories') ?? ''
    const initialCategories: ICategory[] = jsonData ? JSON.parse(jsonData) : []
    setCategories(initialCategories)
  }, [])

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])

  useEffect(() => {
    const selectedCategory = categories?.find(el => el.id === selectedCategoryId)
    if (selectedCategory?.descendants) {
      setSubCategories(selectedCategory.descendants)
    } else {
      setSubCategories([])
    }
  }, [selectedCategoryId, categories])

  return (
    <div className={styles.categoriesPage}>
      <Content handleDeleteItem={deleteCategory} handleAddItem={addCategory} setSelect={setSelectedCategoryId}
               selectedId={selectedCategoryId}
               data={categories}
               headerName={'Название категории'}/>
      <div className={styles.separator}>
        <Arrow/>
      </div>
      {!selectedCategoryId && <div className={styles.chooseCategoryBlock}><p>Выберите категорию</p></div>}
      {selectedCategoryId &&
        <Content handleDeleteItem={deleteSubCategory} handleAddItem={addSubCategory}
                 setSelect={setSelectedSubCategoryId}
                 selectedId={selectedSubCategoryId}
                 data={subCategories}
                 contentType={'subCategory'}
                 headerName={'Название подкатегории'}/>}
    </div>
  )
}

export default CategoriesPage
