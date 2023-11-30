import './style.scss'
import {useState} from "react";

const CustomCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="checkbox-wrapper">
            <input onChange={() => setIsChecked(prev => !prev)} type="checkbox" checked={isChecked}/>
        </div>
    );
};

export default CustomCheckbox
