import styles from './style.module.scss'
import React from 'react'

interface ICustomInputProps {
  isFullWidth?: boolean
  defaultValue: string
  type: 'text' | 'number'
  handleBlur: (value: string) => void
}

const CustomInput = ({
  isFullWidth = false, defaultValue, type, handleBlur = () => {
  }
}: ICustomInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const target = e.target as HTMLInputElement
      target.blur()
    }
  }

  return (
    <input type={type} defaultValue={defaultValue} className={`${styles.input} ${isFullWidth ? styles.fullWidth : ''}`}
           onBlur={(e) => {
             handleBlur(e.target.value)
           }}
           onKeyDown={handleKeyDown}/>
  )
}

export default CustomInput
