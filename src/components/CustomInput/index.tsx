import styles from './style.module.scss'
import React, { useRef, useState } from 'react'

interface ICustomInputProps {
  defaultValue: number
  type: string
  inputChangeHandler: (value: string) => void
}

const CustomInput = ({
  defaultValue, type, inputChangeHandler = () => {
  }
}: ICustomInputProps) => {
  const [value, setValue] = useState(defaultValue.toString())

  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === '13') {
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
             inputChangeHandler(e.target.value)
           }}
           onKeyDown={handleKeyPress}/>
  )
}

export default CustomInput
