import { createContext, ReactNode, useContext, useState } from 'react'

interface ITransactions {
  title: string,
  price: number,
  transactionType: 'income' | 'outcome',
  created_at: Date
}

interface TransactionsContextType {
  transactions: ITransactions[]
  addNewTransaction: (transaction: NewTransaction) => void
}

interface NewTransaction {
  title: string,
  price: number,
  transactionType: 'income' | 'outcome',
}

export const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionsContextProviderProps {
  children: ReactNode
}


export function TransactionContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  async function addNewTransaction(transaction: NewTransaction) {
    const newTransaction = {
      ...transaction,
      created_at: new Date()
    }
    setTransactions((prevState) => [...prevState, newTransaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const UseTransactionContext = () => useContext(TransactionsContext)