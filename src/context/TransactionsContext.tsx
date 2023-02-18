import { api } from '@/lib/axios'
import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

interface ITransactions {
  id: string
  title: string,
  price: number,
  type: 'income' | 'outcome',
  created_at: Date,
  category_title: string,
}

interface TransactionsContextType {
  transactions: ITransactions[]
  getTransactions: (username: string) => void
  addNewTransaction: (transaction: NewTransaction) => void
}

interface NewTransaction {
  id: string
  title: string,
  price: number,
  type: 'income' | 'outcome',
  category_title: string,
}

export const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionsContextProviderProps {
  children: ReactNode
}


export function TransactionContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])


  const getTransactions = useCallback(async (username: string) => {
    const response = await api.get(`/transactions/${username}/transaction`)
    setTransactions(response.data)
  }, [])

  async function addNewTransaction(transaction: NewTransaction) {
    const newTransaction = {
      ...transaction,
      created_at: new Date()
    }
    setTransactions((prevState) => [...prevState, newTransaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addNewTransaction, getTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const UseTransactionContext = () => useContext(TransactionsContext)

