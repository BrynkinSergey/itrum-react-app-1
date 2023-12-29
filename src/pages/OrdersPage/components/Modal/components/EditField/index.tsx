import styles from './style.module.scss'
import { type ReactNode } from 'react'

interface IEditFieldProps {
  text: string
  children: ReactNode
  isGrowable?: boolean
}

const EditField = ({ text, children, isGrowable = false }: IEditFieldProps) => {
  return (
    <div className={`${styles.editField} ${isGrowable ? styles.grow : ''}`}>
      <p>{text}</p>
      {children}
    </div>
  )
}

export default EditField
