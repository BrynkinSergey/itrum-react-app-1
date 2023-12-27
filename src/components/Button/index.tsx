import styles from './style.module.scss'

interface IButtonProps {
  text: string
  sizing?: 'fullWidth' | 'fixed'
  handleClick?: () => void
  style?: 'primary' | 'outlined' | 'borderless'
}

const Button = ({
  text,
  sizing = 'fullWidth',
  handleClick = () => {
  },
  style = 'primary'
}: IButtonProps) => {
  let btnStyle: string
  switch (style) {
    case 'outlined':
      btnStyle = styles.outlined
      break
    case 'borderless':
      btnStyle = styles.borderless
      break
    default:
      btnStyle = styles.primary
  }
  const styleSizing: string = sizing === 'fixed' ? styles.fixed : styles.fullWidth

  return <button onClick={handleClick}
                 className={`${styles.btn} ${btnStyle} ${styleSizing}`}>
    {text}
  </button>
}

export default Button
