import styles from './style.module.scss'

import { ReactComponent as DeleteIcon } from '../../../../../../images/icons/DeleteModal/delete-icon.svg'
import { ReactComponent as EditIcon } from '../../../../../../images/icons/pencil.svg'
import { ReactComponent as CloseIcon } from '../../../../../../images/icons/close.svg'
import { ReactComponent as ApplyIcon } from '../../../../../../images/icons/Apply.svg'

import React, { useRef, useState } from 'react'

interface IContentRowProps {
  isHeader?: boolean
  value: string
  isSelected?: boolean
  handleClick?: () => void
  handleDelete?: () => void
  handleEdit?: (value: string) => void
}

const ContentRow = ({
  handleEdit = () => {
  },
  handleClick = () => {
  },
  handleDelete = () => {
  },
  isSelected = false, isHeader = false, value
}: IContentRowProps) => {
  const [isEditable, setIsEditable] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const headerStyles = `${styles.contentRow} ${styles.contentRowHeader} ${styles.headerText}`
  const defaultStyles = `${styles.contentRow} ${styles.mainText}`
  const selectedStyles = `${styles.contentRow} ${styles.mainText} ${styles.selected}`

  const handleApply = () => {
    if (inputRef.current?.value.trim()) handleEdit(inputRef.current.value)
    setIsEditable(false)
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      handleApply()
    }
  }

  return (
    <div className={isHeader ? headerStyles : isSelected ? selectedStyles : defaultStyles}>
      <div className={styles.textWrapper} onClick={handleClick}>
        {isEditable
          ? <input autoFocus onKeyDown={handleEnter} ref={inputRef} className={styles.text}
                             defaultValue={value}/>
          : <p className={styles.text}>{value}</p>}
      </div>

      {!isHeader && !isEditable && <>
        <div className={styles.icon}>
          <EditIcon onClick={() => {
            setIsEditable(true)
          }}/>
        </div>
        <div className={styles.icon}>
          <DeleteIcon onClick={handleDelete}/>
        </div>
      </>}

      {!isHeader && isEditable && <>
        <div className={styles.icon}>
          <ApplyIcon onClick={handleApply}/>
        </div>
        <div className={styles.icon}>
          <CloseIcon onClick={() => {
            setIsEditable(false)
          }
          }/>
        </div>
      </>}
    </div>
  )
}

export default ContentRow
