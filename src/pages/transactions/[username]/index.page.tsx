import { api } from "@/lib/axios";
import { useCallback, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { InputSearch } from "../components/InputSearch";
import { Summary } from "../components/Summary";
import { TransactionsTable } from "../components/TransactionsTable";
import { StyledTransactions, TransactionsContainer } from "../styles";
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { buildNextAuthOptions } from '../../api/auth/[...nextauth].api'
import { UseTransactionContext } from "@/context/TransactionsContext";
interface ITransactions {
  title: string,
  price: number,
  transactionType: 'income' | 'outcome',
  created_at: Date,
  category: string,
}

export default function Transactions() {
  const { getTransactions, isLoading } = UseTransactionContext()

  const session = useSession()

  useEffect(() => {
    getTransactions(String(session.data?.user?.username))
  }, [getTransactions, session.data?.user?.username])

  return (
    <StyledTransactions>
      <Header />
      <Summary />

      <TransactionsContainer>
        <InputSearch username={session.data?.user.username} />
        
        {isLoading ? (
          <p>loading</p>
        ) : <TransactionsTable />}

      </TransactionsContainer>
    </StyledTransactions>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
