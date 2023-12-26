import styles from './style.module.scss'

import React, { useRef } from 'react'

import { ReactComponent as SearchIcon } from '../../../../images/icons/searsh.svg'
import { ReactComponent as CloseIcon } from '../../../../images/icons/close.svg'

interface ISearchInputProps {
  defaultValue?: string
  placeholder?: string
  handleBlur: (value: string) => void
}

const SearchInput = ({
  defaultValue = '', placeholder = '', handleBlur = () => {
  }
}: ISearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const target = e.target as HTMLInputElement
      target.blur()
    }
  }

  const handleClick = () => {
    if (ref.current) {
      ref.current.value = ''
    }
    handleBlur('')
  }

  return (
    <div className={styles.searchInputWrapper}>
      <SearchIcon className={styles.searchIcon}/>
      <input ref={ref} type={'text'} placeholder={placeholder} defaultValue={defaultValue}
             className={styles.searchInput}
             onBlur={(e) => {
               handleBlur(e.target.value)
             }}
             onKeyDown={handleKeyDown}/>
      <CloseIcon className={styles.closeIcon} onClick={handleClick}/>
    </div>
  )
}

export default SearchInput
