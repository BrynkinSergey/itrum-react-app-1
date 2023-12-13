import './style.scss'

const EditField = ({children, title}) => {
    return (
        <div className={'edit-field font-color--grayspace-text-gray-90 font-size--14'}>
            <p className={'font-line-height--24 font-weight--500'}>{title}</p>
            <div className={'font-line-height--20 font-weight--400'}>
                {children}
            </div>
        </div>
    );
};

export default EditField;
