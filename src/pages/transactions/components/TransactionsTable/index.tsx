import { UseTransactionContext } from "@/context/TransactionsContext";
import { TransactionsTableContainer, PriceHighLight } from "./styles";
import { dateFormatter } from '../../../../helpers/date-formatter'
import { priceFormatter } from '../../../../helpers/price-formatter'

export function TransactionsTable() {
  const { transactions } = UseTransactionContext()

  const transactionsFormatted = transactions.map((transaction) => {
    return {
      ...transaction,
      dateFormatted: dateFormatter.format(new Date(transaction.created_at)).toString(),
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
          <th>Categoria</th>
        </tr>
      </thead>

      <tbody>
        {transactionsFormatted.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.dateFormatted}</td>

              <td>{transaction.title}</td>

              <td>
                <PriceHighLight variant={transaction.type}>
                  {transaction.priceFormatted}
                </PriceHighLight>
              </td>

              <td>{transaction.category_title}</td>
            </tr>
          )
        })}
      </tbody>
    </TransactionsTableContainer>
  )
}