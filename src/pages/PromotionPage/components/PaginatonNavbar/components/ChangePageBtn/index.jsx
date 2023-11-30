import './style.scss'
import {ReactComponent as ArrowSvg} from "./images/arrow.svg";

const ChangePageBtn = ({isReversed = false}) => {
    return <button className={`change-page-button${isReversed ? '--reversed' : ''}`}>
        <ArrowSvg/>
    </button>
}

export default ChangePageBtn
