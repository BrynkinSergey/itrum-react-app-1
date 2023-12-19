import './style.scss'
import ClientsTableRow from "./components/ClientsTableRow";
import parsePhoneNumber from "../../../../helpers/parsePhoneNumber.helper";

const ClientsTable = ({data}) => {
    return (
        <div className={'clients-table'}>
            <ClientsTableRow isHeader={true} values={['ФИ', 'Почта', 'Телефон']}/>
            {data.map(({id, email, phone, name, lastName}) => {
                return <ClientsTableRow values={[`${lastName} ${name}`, email, parsePhoneNumber(phone)]} id={id}/>
            })}
        </div>
    );
};

export default ClientsTable;
