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
  const styleSizing: string = sizing === 'fixed' ? styles.fixed : styles.fullWidth

  return <button onClick={handleClick}
                 className={`${styles.btn} ${btnStyle} ${styleSizing}`}>
    {text}
  </button>
}

export default Button
