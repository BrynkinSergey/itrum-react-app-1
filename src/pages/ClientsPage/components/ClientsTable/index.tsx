import styles from './style.module.scss'
import ClientsTableRow from './components/ClientsTableRow'
import parsePhoneNumber from '../../../../helpers/parsePhoneNumber'
import { type IClient } from '../../../../types/IClient'

interface IClientsTableProps {
  data: IClient[]
}

const ClientsTable = ({ data }: IClientsTableProps) => {
  const parseValues = ({ name, lastName, email, phone }: Partial<IClient>) => {
    return [`${lastName ?? ''} ${name ?? ''}`, email ?? '-', parsePhoneNumber(phone ?? '-')]
  }
  return (
    <div className={styles.clientsTable}>
      <ClientsTableRow id={-1} isHeader={true} values={['ФИ', 'Почта', 'Телефон']}/>
      {data.map(({ id, email, phone, name, lastName }: IClient, index) => {
        return <ClientsTableRow key={`cell-${id}-${index}`}
                                values={parseValues({ name, lastName, email, phone })}
                                id={id}/>
      })}
    </div>
  )
}

export default ClientsTable
