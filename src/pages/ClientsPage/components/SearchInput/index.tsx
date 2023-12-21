import styles from './style.module.scss'
import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from '../../../../images/icons/searsh.svg'
import { ReactComponent as CloseIcon } from '../../../../images/icons/close.svg'

interface ISearchInputProps {
  defaultValue?: string
  type?: string
  placeholder?: string
  inputChangeHandler: (value: string) => void
}

const SearchInput = ({
  defaultValue = '', type = 'text', placeholder = '', inputChangeHandler = () => {
  }
}: ISearchInputProps) => {
  const [value, setValue] = useState(defaultValue || '')

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === '13') {
      const target = e.target as HTMLInputElement
      target.blur()
    }
  }

  const handleClearInput = () => {
    setValue('')
    inputChangeHandler('')
  }

  return (
    <div className={styles.searchInputWrapper}>
      <SearchIcon className={styles.searchIcon}/>
      <input type={type} placeholder={placeholder} value={value}
             className={styles.searchInput}
             onChange={(e) => {
               setValue(e.target.value)
             }}
             onBlur={() => {
               inputChangeHandler(value)
             }}
             onKeyDown={(e) => {
               handleKeyPress(e)
             }}/>
      <CloseIcon className={styles.closeIcon} onClick={handleClearInput}/>
    </div>
  )
}

export default SearchInput
