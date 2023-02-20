import { api } from '@/lib/axios'
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'

interface ITransactions {
  id: string
  title: string,
  price: number,
  type: 'income' | 'outcome',
  created_at: Date,
  category_title: string,
}

interface ICategory {
  id: string;
  title: string;
}

interface TransactionsContextType {
  transactions: ITransactions[]
  categories: ICategory[]
  getTransactions: (username: string) => void
  addNewTransaction: (transaction: NewTransaction, username: string) => void
  addNewCategory: (category: NewCategory) => void
}

interface NewTransaction {
  price: number,
  title: string,
  type: 'income' | 'outcome',
  category_id: string,
}

interface NewCategory {
  title: string;
}

export const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionsContextProviderProps {
  children: ReactNode
}


export function TransactionContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])
  const [categories, setCategories] = useState<ICategory[]>([])


  const getTransactions = useCallback(async (username: string) => {
    const response = await api.get(`/transactions/${username}/transaction`)
    setTransactions(response.data)
  }, [])

  const getCategories = useCallback(async () => {
    const response = await api.get('/category')
    setCategories(response.data)
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

      setTransactions((prevState) => [...prevState, response.data])
    } catch (err) {
      alert(err)
    }
  }

  async function addNewCategory(data: NewCategory) {
    const { title } = data
    try {
      const response = await api.post('/category', {
        title
      })

      setCategories((prevState) => [...prevState, response.data])
    } catch (err: any) {
      alert(err.message)
    }
  }

  useEffect(() => {
    getCategories()
  }, [getCategories])

  return (
    <TransactionsContext.Provider value={{ transactions, addNewCategory, addNewTransaction, getTransactions, categories }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const UseTransactionContext = () => useContext(TransactionsContext)

