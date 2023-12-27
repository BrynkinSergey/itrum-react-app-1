import styles from './style.module.scss'
import React, { useRef, useState } from 'react'

import { ReactComponent as DeleteIcon } from '../../../../images/icons/DeleteModal/delete-icon.svg'
import { ReactComponent as EditIcon } from '../../../../images/icons/pencil.svg'
import { ReactComponent as CloseIcon } from '../../../../images/icons/close.svg'
import { ReactComponent as ApplyIcon } from '../../../../images/icons/Apply.svg'
import { ReactComponent as ImagePlaceholder } from '../../../../images/icons/en-img.svg'

interface IBrandRowProps {
  value: string
  logo?: File | null
  handleDelete?: () => void
  handleEdit?: (value: string) => void
}

const BrandRow = ({
  handleEdit = () => {
  },
  handleDelete = () => {
  },
  logo = null,
  value
}: IBrandRowProps) => {
  const [isEditable, setIsEditable] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

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
    <div className={`${styles.brandRow} ${styles.mainText}`}>
      <div className={styles.imgPlaceholderWrapper}>
        {logo
          ? <img className={styles.image} src={URL.createObjectURL(logo)}/>
          : <ImagePlaceholder/>}
      </div>
      <div className={styles.textWrapper}>
        {isEditable
          ? <input autoFocus onKeyDown={(e) => {
            handleEnter(e)
          }} ref={inputRef} className={styles.text}
                   defaultValue={value}/>
          : <p className={styles.text}>{value}</p>}
      </div>

      {isEditable
        ? <>
          <div className={styles.icon}>
            <ApplyIcon onClick={handleApply}/>
          </div>
          <div className={styles.icon}>
            <CloseIcon onClick={() => {
              setIsEditable(false)
            }
            }/>
          </div>
        </>
        : <>
          <div className={styles.icon}>
            <EditIcon onClick={() => {
              setIsEditable(true)
            }}/>
          </div>
          <div className={styles.icon}>
            <DeleteIcon onClick={handleDelete}/>
          </div>
        </>}
    </div>
  )
}

export default BrandRow
