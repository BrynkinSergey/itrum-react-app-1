import styles from './style.module.scss'
import { ReactComponent as ArrowSvg } from './images/arrow.svg'

interface IChangePageBtnProps {
  isDisabled?: boolean
  isReversed?: boolean
  onClickHandler: () => void
}

const ChangePageBtn = ({ isDisabled = false, isReversed = false, onClickHandler }: IChangePageBtnProps) => {
  return <button disabled={isDisabled} className={`${styles.button} ${isReversed ? styles.reversed : ''}`}
                 onClick={onClickHandler}>
    <ArrowSvg/>
  </button>
}

export default ChangePageBtn
