import styles from './style.module.scss'
import Content from './components/Content'
import { ReactComponent as Arrow } from '../../images/icons/double-arrows.svg'

const CategoriesPage = () => {
  return (
    <div className={styles.categoriesPage}>
      <Content headerName={'Название категории'}/>
      <div className={styles.separator}>
        <Arrow/>
      </div>
      <Content headerName={'Название подкатегории'}/>
    </div>
  )
}

export default CategoriesPage
