import { Box } from "@/components/Box";
import { ButtonNextStep, Container, SubHeading, BoxItem, ButtonLogin } from "./styles";
import { ArrowRight } from 'phosphor-react'
import { FaGithub } from 'react-icons/fa'
import { signIn, useSession } from 'next-auth/react'

export default function Connect() {

  const session = useSession()

  console.log(session)


  async function handleSignInGitHub() {
    await signIn('github')
  }

  const isSignedIn = session.status === 'authenticated'


  return (
    <Container>
      <h2>Conecte-se sua conta</h2>
      <SubHeading>Para garantir segurança e proteção do seus dados. Recomendamos que faça autenticação com os provedores que temos disponíveis.  </SubHeading>

      <Box>
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
          <ButtonNextStep variant="primary" >
            Próximo passo
            <ArrowRight size={20} />
          </ButtonNextStep>
        ) : (
          <ButtonNextStep variant="tertiary" disabled={!isSignedIn} >
            Próximo passo
            <ArrowRight size={20} />
          </ButtonNextStep>
        )}

      </Box>
    </Container>
  )
}