import styles from './style.module.scss'

interface ITextAreaProps {
  value: string
  placeholder?: string
}

const TextArea = ({ value, placeholder = '' }: ITextAreaProps) => {
  return (
    <textarea placeholder={placeholder} className={styles.textarea} value={value} onChange={() => {
    }}/>
  )
}

export default TextArea
