import styles from './style.module.scss'

const CustomCheckbox = ({isChecked, onChangeHandler, isSomeChecked = false}) => {
    return (
        <div
            className={`${styles.checkboxWrapper} ${isSomeChecked && !isChecked ? styles.checkboxWrapperSomeChecked : ''}`}>
            <input onChange={() => onChangeHandler()} type="checkbox" checked={isChecked}/>
        </div>
    );
};

export default CustomCheckbox
