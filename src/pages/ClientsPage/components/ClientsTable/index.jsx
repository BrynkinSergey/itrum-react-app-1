import styles from './style.module.scss'
import ClientsTableRow from "./components/ClientsTableRow";
import parsePhoneNumber from "../../../../helpers/parsePhoneNumber.helper";

const ClientsTable = ({data}) => {

    const parseValues = ({name, lastName, email, phone}) => {
        return [`${lastName ? lastName : ''} ${name ? name : ''}`, email ? email : '-', parsePhoneNumber(phone ? phone : '-')]
    }
    return (
        <div className={styles.clientsTable}>
            <ClientsTableRow isHeader={true} values={['ФИ', 'Почта', 'Телефон']}/>
            {data.map(({id, email, phone, name, lastName}, index) => {
                return <ClientsTableRow key={`cell-${id}-${index}`}
                                        values={parseValues({name, lastName, email, phone})}
                                        id={id}/>
            })}
        </div>
    );
};

export default ClientsTable;
