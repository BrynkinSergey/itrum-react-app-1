import styles from './Button.module.scss'
import styled from "styled-components";

const ButtonWarpper = styled.button`
  width: ${({width}) => width};
  height: ${({height}) => height};
`

const Button = ({text, handleClick, style = 'primary', ...rest}) => {
    const btnStyle = style === 'primary' ? styles.primary : styles.outlined

    return <ButtonWarpper onClick={handleClick} {...rest} className={`${styles.btn} ${btnStyle}`}>
        <p className={styles.text}>{text}</p>
    </ButtonWarpper>
}

export default Button
