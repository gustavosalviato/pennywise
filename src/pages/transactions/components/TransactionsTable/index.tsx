import { TransactionsTableContainer, PriceHighLight } from "./styles";

export function TransactionsTable() {
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
        <tr>
          <td>02/10/2001</td>

          <td>Pastel na feira</td>

          <td>
            <PriceHighLight variant="income">
              R$ 30,00
            </PriceHighLight>
          </td>

          <td>Alimentação</td>
        </tr>

        <tr>
          <td>02/10/2001</td>

          <td>Pastel na feira</td>

          <td>
            <PriceHighLight variant="outcome">
              R$ 30,00
            </PriceHighLight>
          </td>

          <td>Alimentação</td>
        </tr>
      </tbody>
    </TransactionsTableContainer>
  )
}