import { UseTransactionContext } from "@/context/TransactionsContext";
import { TransactionsTableContainer, PriceHighLight } from "./styles";
import { dateFormatter } from '../../../../helpers/date-formatter'
import { priceFormatter } from '../../../../helpers/price-formatter'

export function TransactionsTable() {
  const { transactions } = UseTransactionContext()
  return (
    <TransactionsTableContainer>
      <thead>
        <tr>
          <th>Data</th>
          <th>Descrição</th>
          <th>Valor</th>
          {/* <th>Categoria</th> */}
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={String(transaction.created_at)}>
              <td>{dateFormatter.format(transaction.created_at)}</td>

              <td>{transaction.title}</td>

              <td>
                <PriceHighLight variant={transaction.transactionType}>
                  {priceFormatter.format(transaction.price)}
                </PriceHighLight>
              </td>

              {/* <td>Alimentação</td> */}
            </tr>
          )
        })}



      </tbody>
    </TransactionsTableContainer>
  )
}