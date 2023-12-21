import styles from './style.module.scss'

interface ICustomCheckboxProps {
  isChecked: boolean
  handleChange: () => void
  isSomeChecked?: boolean
}

const CustomCheckbox = ({ isChecked, handleChange, isSomeChecked = false }: ICustomCheckboxProps) => {
  return (
    <div
      className={`${styles.checkboxWrapper} ${isSomeChecked && !isChecked ? styles.checkboxWrapperSomeChecked : ''}`}>
      <input onChange={handleChange} type="checkbox" checked={isChecked}/>
    </div>
  )
}

export default CustomCheckbox
