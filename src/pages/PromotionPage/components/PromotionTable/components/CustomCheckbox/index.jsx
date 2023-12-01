import './style.scss'

const CustomCheckbox = ({isChecked, setIsChecked, isSomeChecked}) => {
    return (
        <div className={`checkbox-wrapper${isSomeChecked ? ' checkbox-wrapper--some-checked' : ''}`}>
            <input onChange={() => setIsChecked()} type="checkbox" checked={isChecked}/>
        </div>
    );
};

export default CustomCheckbox
