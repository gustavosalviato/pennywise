import { SummaryContainer, SummaryItem } from "./styles";
import { FiDollarSign, FiCornerRightDown, FiCornerRightUp } from 'react-icons/fi'
import { UseTransactionContext } from "@/context/TransactionsContext";
import { priceFormatter } from "@/helpers/price-formatter";
import { useMemo } from "react";
import { dateFormatter } from "@/helpers/date-formatter";
import { FiCalendar } from 'react-icons/fi'

export function Summary() {

  const { transactions } = UseTransactionContext()

  const transactionsIncome = transactions.filter((transaction) => {
    return transaction.transactionType === 'income'
  })

  const lastDateIncome = transactionsIncome.pop()


  const transactionsOutcome = transactions.filter((transaction) => {
    return transaction.transactionType === 'outcome'
  })

  const lastDateOutcome = transactionsOutcome.pop()

  const summary = useMemo(() => {
    return transactions.reduce((acc, transaction) => {
      if (transaction.transactionType === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      return acc
    }, {
      income: 0,
      outcome: 0,
      total: 0,
    })
  }, [transactions])

  return (
    <SummaryContainer>
      <SummaryItem>
        <header>
          <p>Entradas</p>

          <FiCornerRightUp
            color="#2563EB"
            size={24}
          />

        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>

        <footer>
          {lastDateIncome?.created_at ?
            (
              <p>{`Última entrada em: ${dateFormatter.format(lastDateIncome.created_at)}`}</p>
            ) : (
              <p>{`Última entrada em:`}</p>
            )

          }
        </footer>
      </SummaryItem>

      <SummaryItem>
        <header>
          <p>Saídas</p>

          <FiCornerRightDown
            color="#F75A68"
            size={24}
          />

        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>

        <footer>
          {lastDateOutcome?.created_at ?
            (
              <p>{`Última entrada em: ${dateFormatter.format(lastDateOutcome.created_at)}`}</p>
            ) : (
              <p>{`Última entrada em:`}</p>
            )

          }
        </footer>
      </SummaryItem>

      <SummaryItem ShowTotal>
        <header>
          <p>Total</p>

          <FiDollarSign
            color="#FFF"
            size={24}
          />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>

        <footer>
          <span>
            {dateFormatter.format(new Date())}
            <FiCalendar size={20} />
          </span>
        </footer>
      </SummaryItem>
    </SummaryContainer>
  )
}