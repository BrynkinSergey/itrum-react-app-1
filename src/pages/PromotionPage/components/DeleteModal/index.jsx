import './style.scss'
import {ReactComponent as DeleteIcon} from "./images/delete-icon.svg";

const DeleteModal = ({numberOfChecked}) => {
    return (
        <div className={'delete-modal'}>
            <p className={'font-size--16 font-line-height--24 font-weight--400 font-color--black-040'}>Количество
                выбранных
                позиций: {numberOfChecked}</p>
            <button className={'delete-modal_button'}>
                <DeleteIcon/>
                <p className={'font-size--16 font-line-height--24 font-weight--500 font-color--gray-1'}>Удалить</p>
            </button>
        </div>
    );
};

export default DeleteModal;