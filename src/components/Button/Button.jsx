import './Button.scss'
import styled from "styled-components";

const ButtonWarpper = styled.button`
  width: ${({width}) => width};
  height: ${({height}) => height};
`

const Button = ({text, style = 'primary', ...rest}) => {

    return <ButtonWarpper {...rest} className={`btn btn--${style}`}>
        <p className={'font-size--16 font-line-height--24 font-weight--500'}>{text}</p>
    </ButtonWarpper>
}

export default Button
