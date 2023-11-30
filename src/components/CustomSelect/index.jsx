import './style.scss'

const CustomSelect = ({options, defaultOption}) => {
    return <select className={'custom-select font-color--grayspace-icon-gray-80 font-size--13 font-line-height--20'}
                   defaultValue={defaultOption}>
        {options.map(option => <option key={'option' + option}>{option}</option>)}
    </select>

}

export default CustomSelect
