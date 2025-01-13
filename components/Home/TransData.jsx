import TransactionTable from './Transaction'
import {getTransaction} from '../../lib/getUsers'

const TransData = async () => {
    const data = await getTransaction()
    console.log('transactions', data)
  return (
    <div>

          <TransactionTable />

    </div>
  )
}

export default TransData