import './style.scss'
import styled from "styled-components";

const StyledSelect = styled.select`
  width: ${({width}) => width};
  height: ${({height}) => height};
`

const CustomSelect = ({
                          options, defaultOption, selectChangeHandler = () => {
    }, ...rest
                      }) => {
    return <StyledSelect {...rest}
                         className={'custom-select font-color--grayspace-icon-gray-80 font-size--13 font-line-height--20'}
                         defaultValue={defaultOption}
                         onChange={(choice) => selectChangeHandler(choice)}>
        {options.map(option => <option key={'option' + option}>{option}</option>)}
    </StyledSelect>

}

export default CustomSelect
