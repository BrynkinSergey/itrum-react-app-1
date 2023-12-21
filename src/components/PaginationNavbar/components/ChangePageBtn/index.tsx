import styles from './style.module.scss'
import { ReactComponent as ArrowSvg } from './images/arrow.svg'

interface IChangePageBtnProps {
  isDisabled?: boolean
  isReversed?: boolean
  handleClick: () => void
}

const ChangePageBtn = ({ isDisabled = false, isReversed = false, handleClick }: IChangePageBtnProps) => {
  return <button disabled={isDisabled} className={`${styles.button} ${isReversed ? styles.reversed : ''}`}
                 onClick={handleClick}>
    <ArrowSvg/>
  </button>
}

export default ChangePageBtn
