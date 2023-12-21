import styles from './style.module.scss'

interface ICustomSelectProps {
  isFixed?: boolean
  options: string[]
  defaultOption: string
  handleChange: (value: string) => void
}

const CustomSelect = ({
  isFixed = false, options, defaultOption, handleChange = () => {
  }
}: ICustomSelectProps) => {
  return <select
    className={`${styles.select} ${styles.text} ${isFixed ? styles.large : ''}`}
    defaultValue={defaultOption}
    onChange={(choice) => {
      handleChange(choice.target.value)
    }}>
    {options.map(option => <option key={'option' + option}>{option}</option>)}
  </select>
}

export default CustomSelect
