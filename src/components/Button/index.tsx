import styles from './style.module.scss'

interface IButtonProps {
  text: string
  handleClick?: () => void
  style?: 'primary' | 'outlined'
}

const Button = ({
  text,
  handleClick = () => {
  },
  style = 'primary'
}: IButtonProps) => {
  const btnStyle: string = style === 'primary' ? styles.primary : styles.outlined

  return <button onClick={handleClick} className={`${styles.btn} ${btnStyle}`}>
    <p className={styles.text}>{text}</p>
  </button>
}

export default Button
