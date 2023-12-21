import styles from './style.module.scss'

import { type ReactElement } from 'react'

interface IEditFieldProps {
  title: string
  children: ReactElement
}

const EditField = ({ children, title }: IEditFieldProps) => {
  return (
    <div className={styles.editField}>
      <p className={styles.boldText}>{title}</p>
      <div className={styles.text}>
        {children}
      </div>
    </div>
  )
}

export default EditField
