import styles from './style.module.scss'
import { ReactComponent as ArrowSvg } from './images/arrow.svg'

const ChangePageBtn = ({ isDisabled = false, isReversed = false, onClickHandler }) => {
  return <button disabled={isDisabled} className={`${styles.button} ${isReversed ? styles.reversed : ''}`}
                   onClick={onClickHandler}>
        <ArrowSvg/>
    </button>
}

export default ChangePageBtn
