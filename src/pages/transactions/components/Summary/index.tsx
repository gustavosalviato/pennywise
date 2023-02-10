import { SummaryContainer, SummaryItem } from "./styles";
import { FiDollarSign, FiCornerRightDown, FiCornerRightUp } from 'react-icons/fi'
export function Summary() {
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

        <strong>R$ 3.0000,00</strong>

        <footer>
          <p>ultima entrada 16 de abril</p>
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

        <strong>R$ 3.0000,00</strong>

        <footer>
          <p>ultima ent ada 16 de abril</p>
        </footer>
      </SummaryItem>

      <SummaryItem>
        <header>
          <p>Total</p>

          <FiDollarSign
            color="#FFF"
            size={24}
          />
        </header>

        <strong>R$ 3.0000,00</strong>

        <footer>
          <p>ultima entrada 16 de abril</p>
        </footer>
      </SummaryItem>
    </SummaryContainer>
  )
}