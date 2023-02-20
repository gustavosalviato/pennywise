import { HeaderContainer, HeaderContext, ButtonNewTransaction, ButtonNewCategory, ContainerButtons } from "./styles";
import logoImg from '../../../../assets/logoHeader.svg'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";
import { NewCategoryModal } from "../NewCategoryModal";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContext>
        <Image
          src={logoImg}
          alt="Logo principal do aplicativo"
        />

        <ContainerButtons>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ButtonNewTransaction>
                Nova transação
              </ButtonNewTransaction>
            </Dialog.Trigger>
            <NewTransactionModal />
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ButtonNewCategory>
                Nova Categoria
              </ButtonNewCategory>
            </Dialog.Trigger>
            <NewCategoryModal />
          </Dialog.Root>
        </ContainerButtons>
      </HeaderContext>
    </HeaderContainer>
  )
}