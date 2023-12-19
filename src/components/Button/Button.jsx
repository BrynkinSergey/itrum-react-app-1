import styles from './Button.module.scss'
import styled from "styled-components";

const ButtonWarpper = styled.button`
  width: ${({width}) => width};
  height: ${({height}) => height};
`

const Button = ({text, handleClick, style = 'primary', ...rest}) => {
    const btnStyle = style === 'primary' ? styles.primary : styles.outlined

    return <ButtonWarpper onClick={handleClick} {...rest} className={`${styles.btn} ${btnStyle}`}>
        <p className={'font-size--16 font-line-height--24 font-weight--500'}>{text}</p>
    </ButtonWarpper>
}

export default Button
