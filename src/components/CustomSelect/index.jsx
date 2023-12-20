import styles from './style.module.scss'
import styled from 'styled-components'

const StyledSelect = styled.select`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

const CustomSelect = ({
  options, defaultOption, selectChangeHandler = () => {
  }, ...rest
}) => {
  return <StyledSelect {...rest}
                         className={`${styles.select} ${styles.text}`}
                         defaultValue={defaultOption}
                         onChange={(choice) => {
                           selectChangeHandler(choice.target.value)
                         }}>
        {options.map(option => <option key={'option' + option}>{option}</option>)}
    </StyledSelect>
}

export default CustomSelect
