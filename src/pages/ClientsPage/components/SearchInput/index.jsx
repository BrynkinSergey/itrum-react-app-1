import './style.scss'
import {useState} from "react";
import styled from "styled-components";
import {ReactComponent as SearchIcon} from "../../../../images/icons/searsh.svg";
import {ReactComponent as CloseIcon} from "../../../../images/icons/close.svg";

const CustomStyledInput = styled.input`
  width: ${({width}) => width};
  height: ${({height}) => height};
  background-color: ${({backgroundColor}) => backgroundColor};
  border: ${({border}) => border};
  border-radius: ${({borderRadius}) => borderRadius};
`

const SearchInput = ({
                         defaultValue = '', type, placeholder = '', inputChangeHandler = (value) => {
    }, ...rest
                     }) => {
    const [value, setValue] = useState(defaultValue)

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) e.target.blur();
    }

    const handleClearInput = () => {
        setValue('')
        inputChangeHandler('')
    }

    return (
        <div className={'search-input-wrapper'}>
            <SearchIcon className={'test'}/>
            {/*<div className={'test'}></div>*/}
            <CustomStyledInput {...rest} type={type} placeholder={placeholder} value={value} className={'search-input'}
                               onChange={(e) => setValue(e.target.value)}
                               onBlur={() => inputChangeHandler(value)}
                               onKeyDown={(e) => handleKeyPress(e)}/>
            <CloseIcon className={'test-2'} onClick={handleClearInput}/>
            {/*<div className={'test-2'} onClick={handleClearInput}></div>*/}
        </div>
    );
};

export default SearchInput;
