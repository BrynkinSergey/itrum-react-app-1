import styles from './style.module.scss'
import React from 'react'

interface ICustomInputProps {
  isFullWidth?: boolean
  defaultValue?: string
  type: 'text' | 'number'
  handleBlur?: (value: string) => void
  handleEnter?: () => void
  value?: string
  setValue?: (value: string) => void
}

const CustomInput = ({
  setValue = () => {
  },
  value,
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
    <input type={type} value={value}
           className={`${styles.input} ${isFullWidth ? styles.fullWidth : ''}`}
           onChange={(e) => {
             setValue(e.target.value)
           }}
           onBlur={(e) => {
             handleBlur(e.target.value)
           }}
           onKeyDown={handleKeyDown}/>
  )
}

export default CustomInput
