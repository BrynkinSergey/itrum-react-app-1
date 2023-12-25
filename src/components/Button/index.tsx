import styles from './style.module.scss'

interface IButtonProps {
  text: string
  sizing?: 'fullWidth' | 'fixed'
  handleClick?: () => void
  style?: 'primary' | 'outlined'
}

const Button = ({
  text,
  sizing = 'fullWidth',
  handleClick = () => {
  },
  style = 'primary'
}: IButtonProps) => {
  const btnStyle: string = style === 'primary' ? styles.primary : styles.outlined

  return <button onClick={handleClick}
                 className={`${styles.btn} ${btnStyle} ${sizing === 'fixed' ? styles.fixed : styles.fullWidth}`}>
    <p className={styles.text}>{text}</p>
  </button>
}

export default Button
