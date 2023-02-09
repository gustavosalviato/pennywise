import { Box } from "@/components/Box";
import { ButtonNextStep, Container, SubHeading, BoxItem, ButtonLogin } from "./styles";
import { GitPullRequest, ArrowRight } from 'phosphor-react'
import { FaGithub } from 'react-icons/fa'
export default function Connect() {
  return (
    <Container>
      <h2>Conecte-se sua conta</h2>
      <SubHeading>Para garantir segurança e proteção do seus dados. Recomendamos que faça autenticação com os provedores que temos disponíveis.  </SubHeading>

      <Box>
        <BoxItem>
          <p>GitHub</p>

          <ButtonLogin>
            <FaGithub  size={20} />
            Conectar
          </ButtonLogin>
        </BoxItem>

        <ButtonNextStep variant="primary" >
          Próximo passo
          <ArrowRight size={20} />
        </ButtonNextStep>
      </Box>
    </Container>
  )
}