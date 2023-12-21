import styles from './style.module.scss'
import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from '../../../../images/icons/searsh.svg'
import { ReactComponent as CloseIcon } from '../../../../images/icons/close.svg'

interface ISearchInputProps {
  defaultValue?: string
  type?: string
  placeholder?: string
  handleChange: (value: string) => void
}

const SearchInput = ({
  defaultValue = '', type = 'text', placeholder = '', handleChange = () => {
  }
}: ISearchInputProps) => {
  const [value, setValue] = useState(defaultValue || '')

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const target = e.target as HTMLInputElement
      target.blur()
    }
  }

  const handleClearInput = () => {
    setValue('')
    handleChange('')
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
               handleChange(value)
             }}
             onKeyDown={(e) => {
               handleKeyPress(e)
             }}/>
      <CloseIcon className={styles.closeIcon} onClick={handleClearInput}/>
    </div>
  )
}

export default SearchInput
