import { UseTransactionContext } from "@/context/TransactionsContext";
import { TransactionsTableContainer, PriceHighLight } from "./styles";
import { dateFormatter } from '../../../../helpers/date-formatter'
import { priceFormatter } from '../../../../helpers/price-formatter'

export function TransactionsTable() {
  const { transactions } = UseTransactionContext()

  const transactionsFormatted = transactions.map((transaction) => {
    return {
      ...transaction,
      dateFormatted: dateFormatter.format(transaction.created_at),
      priceFormatted: priceFormatter.format(transaction.price),
    }
  })
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
        {transactionsFormatted.map((transaction) => {
          return (
            <tr key={String(transaction.created_at)}>
              <td>{transaction.dateFormatted}</td>

              <td>{transaction.title}</td>

              <td>
                <PriceHighLight variant={transaction.transactionType}>
                  {transaction.priceFormatted}
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