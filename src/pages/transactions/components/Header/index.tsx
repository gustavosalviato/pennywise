import { HeaderContainer, HeaderContext, ButtonNewTransaction } from "./styles";
import logoImg from '../../../../assets/logoHeader.svg'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContext>
        <Image
          src={logoImg}
          alt="Logo principal do aplicativo"
        />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonNewTransaction>
              Nova transação
            </ButtonNewTransaction>
          </Dialog.Trigger>


          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContext>
    </HeaderContainer>
  )
}