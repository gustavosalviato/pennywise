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
  addNewTransaction: (transaction: NewTransaction, username: string) => void
}

interface NewTransaction {
  price: number,
  title: string,
  type: 'income' | 'outcome',
  category_id: string,
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

  async function addNewTransaction(transaction: NewTransaction, username: string) {
    const { category_id, price, title, type } = transaction
    try {
      const response = await api.post(`/transactions/${username}/transaction`, {
        price,
        title,
        type,
        category_id,
      })

      console.log(response.data)
      setTransactions((prevState) => [...prevState, response.data])
    } catch (err) {
      alert(err)
    }
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addNewTransaction, getTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const UseTransactionContext = () => useContext(TransactionsContext)

