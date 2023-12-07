import './style.scss'

const CustomCheckbox = ({isChecked, onChangeHandler, isSomeChecked = false}) => {
    return (
        <div className={`checkbox-wrapper${isSomeChecked && !isChecked ? ' checkbox-wrapper--some-checked' : ''}`}>
            <input onChange={() => onChangeHandler()} type="checkbox" checked={isChecked}/>
        </div>
    );
};

export default CustomCheckbox
