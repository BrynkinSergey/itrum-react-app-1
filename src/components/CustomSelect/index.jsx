import './style.scss'

const CustomSelect = ({options, defaultOption, selectChangeHandler}) => {
    return <select className={'custom-select font-color--grayspace-icon-gray-80 font-size--13 font-line-height--20'}
                   defaultValue={defaultOption}
                   onChange={(choice) => selectChangeHandler(choice)}>
        {options.map(option => <option key={'option' + option}>{option}</option>)}
    </select>

}

export default CustomSelect
