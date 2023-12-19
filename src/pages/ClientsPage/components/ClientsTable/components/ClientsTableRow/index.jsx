import './style.scss'

const ClientsTableRow = ({isHeader = false, values, id}) => {

    const headerStyles = 'clients-table_row clients-table_row_header font-color--grayspace-text-gray-70 font-size--14 font-line-height--24 font-weight--500';
    const defaultStyles = 'clients-table_row font-color--text-main font-size--14 font-line-height--20 font-weight--400';

    return (
        <div className={isHeader ? headerStyles : defaultStyles}>
            {values.map((el, index) => <p key={`cell-${id}-${index}`}>{el}</p>)}
        </div>
    );
};

export default ClientsTableRow;
