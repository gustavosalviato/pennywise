import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { TransactionsContainer } from "./styles";

export default function Transactions() {
  return (
    <TransactionsContainer>
      <Header />
      <Summary />
    </TransactionsContainer>
  )
}