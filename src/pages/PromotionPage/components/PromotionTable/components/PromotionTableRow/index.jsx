import './style.scss'
import CustomCheckbox from "../CustomCheckbox";

const PromotionTableRow = ({isSomeChecked, isChecked, setIsChecked, isHeader, id, values = []}) => {
    const headerStyles = 'promotion-table_row promotion-table_row_header font-color--grayspace-text-gray-70 font-size--14 font-line-height--24 font-weight--500';
    const defaultStyles = 'promotion-table_row font-color--text-main font-size--14 font-line-height--20 font-weight--400';

    const checkedHandler = () => {
        if (isHeader) {
            setIsChecked(prev => +!prev)
        } else {
            setIsChecked(id - 1)
        }
    }

    return (
        <div className={isHeader ? headerStyles : defaultStyles}>
            <CustomCheckbox isSomeChecked={isSomeChecked} isChecked={isChecked} setIsChecked={checkedHandler}/>
            {values.map(el => <p key={`cell-${id}-${el}`}>{el}</p>)}
        </div>
    );
};

export default PromotionTableRow;
