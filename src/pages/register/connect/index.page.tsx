import { Box } from "@/components/Box";
import { ButtonNextStep, Container, SubHeading, BoxItem, ButtonLogin } from "./styles";
import { ArrowRight } from 'phosphor-react'
import { FaGithub } from 'react-icons/fa'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FormEvent } from "react";
export default function Connect() {

  const session = useSession()

  const router = useRouter()

  async function handleSignInGitHub() {
    await signIn('github')
  }

  const isSignedIn = session.status === 'authenticated'

  async function handleGoToTransactions(event: FormEvent) {
    event.preventDefault()
    await router.push(`/transactions/${session.data?.user.username}`)
  }


  return (
    <Container>
      <h2>Conecte-se sua conta</h2>
      <SubHeading>Para garantir segurança e proteção do seus dados. Recomendamos que faça autenticação com os provedores que temos disponíveis.  </SubHeading>

      <Box onSubmit={handleGoToTransactions}>
        <BoxItem>
          <p>Github</p>

          {isSignedIn ? (
            <ButtonLogin disabled>
              <FaGithub size={20} />
              Conectado
            </ButtonLogin>
          ) : (
            <ButtonLogin
              onClick={handleSignInGitHub}
            >
              <FaGithub size={20} />
              Conectar
            </ButtonLogin>
          )
          }
        </BoxItem>

        {isSignedIn ? (
          <ButtonNextStep
            variant="primary"
          >
            Próximo passo aaaaad
            <ArrowRight size={20} />
          </ButtonNextStep>
        ) : (
          <ButtonNextStep
            variant="tertiary"
            disabled={!isSignedIn}

          >
            Próximo passo
            <ArrowRight size={20} />
          </ButtonNextStep>
        )}

      </Box>
    </Container>
  )
}