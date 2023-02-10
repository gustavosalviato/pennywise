import { HeaderContainer, HeaderContext, ButtonNewTransaction } from "./styles";
import logoImg from '../../../../assets/logoHeader.svg'
import Image from 'next/image'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContext>
        <Image
          src={logoImg}
          alt="Logo principal do aplicativo"
        />

        <ButtonNewTransaction>Nova transação</ButtonNewTransaction>
      </HeaderContext>
    </HeaderContainer>
  )
}