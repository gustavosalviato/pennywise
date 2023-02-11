import { Header } from "./components/Header";
import { InputSearch } from "./components/InputSearch";
import { Summary } from "./components/Summary";
import { StyledTransactions, TransactionsContainer } from "./styles";

export default function Transactions() {
  return (
    <StyledTransactions>
      <Header />
      <Summary />

      <TransactionsContainer>

        <InputSearch />

      </TransactionsContainer>
    </StyledTransactions>
  )
}