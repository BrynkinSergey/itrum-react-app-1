import './style.scss'
import {ReactComponent as ArrowSvg} from "./images/arrow.svg";

const ChangePageBtn = ({isDisabled = false, isReversed = false, onClickHandler}) => {
    return <button disabled={isDisabled} className={`change-page-button${isReversed ? '--reversed' : ''}`}
                   onClick={() => onClickHandler()}>
        <ArrowSvg/>
    </button>
}

export default ChangePageBtn
