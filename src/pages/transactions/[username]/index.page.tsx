import { Header } from "../components/Header";
import { InputSearch } from "../components/InputSearch";
import { Summary } from "../components/Summary";
import { TransactionsTable } from "../components/TransactionsTable";
import { StyledTransactions, TransactionsContainer } from "../styles";

export default function Transactions() {
  return (
    <StyledTransactions>
      <Header />
      <Summary />

      <TransactionsContainer>
        <InputSearch />
        <TransactionsTable />
      </TransactionsContainer>
    </StyledTransactions>
  )
}