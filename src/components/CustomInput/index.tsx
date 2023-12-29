import styles from './style.module.scss'
import React from 'react'

interface ICustomInputProps {
  isFullWidth?: boolean
  defaultValue?: string
  isDisabled?: boolean
  type: 'text' | 'number'
  handleBlur?: (value: string) => void
  handleEnter?: () => void
  value?: string
  placeholder?: string
  setValue?: (value: string) => void
}

const CustomInput = ({
  setValue = () => {
  },
  value,
  placeholder = '',
  isDisabled = false,
  isFullWidth = false,
  type,
  handleBlur = () => {
  },
  handleEnter = () => {
  }
}: ICustomInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      handleEnter()
      const target = e.target as HTMLInputElement
      target.blur()
    }
  }

  return (
    <input type={type} value={value} placeholder={placeholder} disabled={isDisabled}
           className={`${styles.input} ${isFullWidth ? styles.fullWidth : ''}`}
           onChange={({ target: { value } }) => {
             setValue(value)
           }}
           onBlur={({ target: { value } }) => {
             handleBlur(value)
           }}
           onKeyDown={handleKeyDown}/>
  )
}

export default CustomInput
