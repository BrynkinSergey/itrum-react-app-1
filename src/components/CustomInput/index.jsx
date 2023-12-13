import './style.scss'
import {useState} from "react";
import styled from "styled-components";

const CustomStyledInput = styled.input`
  width: ${({width}) => width};
  height: ${({height}) => height};
  background-color: ${({backgroundColor}) => backgroundColor};
  border: ${({border}) => border};
  border-radius: ${({borderRadius}) => borderRadius};
`

const CustomInput = ({defaultValue, type, inputChangeHandler, ...rest}) => {
    const [value, setValue] = useState(defaultValue)

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) e.target.blur();
    }

    return (
        <CustomStyledInput {...rest} type={type} value={value} className={'custom-input'}
                           onChange={(e) => setValue(e.target.value)}
                           onBlur={(e) => inputChangeHandler(e.target.value)}
                           onKeyDown={(e) => handleKeyPress(e)}/>
    );
};

export default CustomInput;
