import styles from './style.module.scss'

interface ICustomSelectProps {
  isFullSize?: boolean
  options: string[]
  defaultOption: string
  handleChange: (value: string) => void
}

const CustomSelect = ({
  isFullSize = true, options, defaultOption, handleChange = () => {
  }
}: ICustomSelectProps) => {
  return <select
    className={`${styles.select} ${styles.text} ${isFullSize ? styles.fullSize : ''}`}
    defaultValue={defaultOption}
    onChange={(choice) => {
      handleChange(choice.target.value)
    }}>
    {options.map(option => <option key={'option' + option}>{option}</option>)}
  </select>
}

export default CustomSelect
