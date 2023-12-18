import './style.scss'
import CustomCheckbox from "../CustomCheckbox";

const PromotionTableRow = ({
                               isSomeChecked,
                               isChecked,
                               toggleCheckbox,
                               isHeader,
                               id,
                               values = [],
                               openEditModal = () => {
                               }
                           }) => {
    const headerStyles = 'promotion-table_row promotion-table_row_header font-color--grayspace-text-gray-70 font-size--14 font-line-height--24 font-weight--500';
    const defaultStyles = 'promotion-table_row font-color--text-main font-size--14 font-line-height--20 font-weight--400';

    return (
        <div className={isHeader ? headerStyles : defaultStyles}>
            <CustomCheckbox isSomeChecked={isSomeChecked} isChecked={isChecked}
                            onChangeHandler={() => toggleCheckbox()}/>
            <div onClick={() => {
                if (!isHeader) openEditModal({
                    id: id,
                    category: values[0],
                    subCategory: values[1],
                    brand: values[2],
                    products: values[3],
                    cashback: values[4]
                })
            }}>
                {values.map((el, index) => <p key={`cell-${id}-${index}`}>{el}</p>)}
            </div>
        </div>
    );
};

export default PromotionTableRow;
