import styles from './style.module.scss'
import { Button, CustomInput } from '../../../../components'
import { useState } from 'react'
import ContentRow from './components/ContentRow'

interface IContentProps {
  headerName: string
  data?: any[]
}

const Content = ({ data = [], headerName }: IContentProps) => {
  console.log(data)
  const [inputValue, setInputValue] = useState('')
  console.log(inputValue)

  const handleBlur = (value: string) => {
    setInputValue(value)
  }

  return (
    <div className={styles.content}>
      <div className={styles.addSection}>
        <CustomInput isFullWidth={true} defaultValue={''} type={'text'} handleBlur={handleBlur}/>
        <Button text={'Добавить категорию'}/>
      </div>
      <div>
        <ContentRow value={headerName} isHeader={true}/>
        <ContentRow value={'abc'}/>
      </div>
    </div>
  )
}

export default Content
