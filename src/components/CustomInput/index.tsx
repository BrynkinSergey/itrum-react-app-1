import styles from './style.module.scss'
import React, { useRef, useState } from 'react'

interface ICustomInputProps {
  defaultValue: number
  type: string
  handleChange: (value: string) => void
}

const CustomInput = ({
  defaultValue, type, handleChange = () => {
  }
}: ICustomInputProps) => {
  const [value, setValue] = useState(defaultValue.toString())

  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if (inputRef.current) {
        inputRef.current.blur()
      }
    }
  }

  return (
    <input ref={inputRef} type={type} value={value} className={styles.input}
           onChange={(e) => {
             setValue(e.target.value)
           }}
           onBlur={(e) => {
             handleChange(e.target.value)
           }}
           onKeyDown={handleKeyPress}/>
  )
}

export default CustomInput
