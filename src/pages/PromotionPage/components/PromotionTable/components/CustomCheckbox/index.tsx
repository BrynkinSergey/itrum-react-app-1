import styles from './style.module.scss'

interface ICustomCheckboxProps {
  isChecked: boolean
  onChangeHandler: () => void
  isSomeChecked?: boolean
}

const CustomCheckbox = ({ isChecked, onChangeHandler, isSomeChecked = false }: ICustomCheckboxProps) => {
  return (
    <div
      className={`${styles.checkboxWrapper} ${isSomeChecked && !isChecked ? styles.checkboxWrapperSomeChecked : ''}`}>
      <input onChange={onChangeHandler} type="checkbox" checked={isChecked}/>
    </div>
  )
}

export default CustomCheckbox
