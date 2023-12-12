import './Button.scss'
import styled from "styled-components";

const ButtonWarpper = styled.button`
  width: ${({width}) => width};
  height: ${({height}) => height};
`

const Button = ({text, ...rest}) => {


    // return <button className={'btn'}>
    //     <p className={'font-size--16 font-line-height--24 font-weight--500 font-color--grayspace-layout-white'}>{props.text}</p>
    // </button>

    return <ButtonWarpper {...rest} className={'btn'}>
        <p className={'font-size--16 font-line-height--24 font-weight--500 font-color--grayspace-layout-white'}>{text}</p>
    </ButtonWarpper>
}

export default Button
