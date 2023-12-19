import styles from './style.module.scss'

const ClientsTableRow = ({isHeader = false, values, id}) => {

    const headerStyles = `${styles.clientsTableRow} ${styles.clientsTableRowHeader} ${styles.headerText}`;
    const defaultStyles = `${styles.clientsTableRow} ${styles.mainText}`;

    return (
        <div className={isHeader ? headerStyles : defaultStyles}>
            {values.map((el, index) => <p key={`cell-${id}-${index}`}>{el}</p>)}
        </div>
    );
};

export default ClientsTableRow;
