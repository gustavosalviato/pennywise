import { Box } from "@/components/Box";
import { ButtonNextStep, Container, SubHeading, BoxItem, ButtonLogin } from "./styles";
import { GitPullRequest, ArrowRight } from 'phosphor-react'
export default function Connect() {
  return (
    <Container>
      <h2>Conecte-se sua conta</h2>
      <SubHeading>Conecte-se com seu perfil do GitHub.</SubHeading>

      <Box>
        <BoxItem>
          <p>GitHub</p>

          <ButtonLogin>
            <GitPullRequest size={20}/>
            Conectar            
          </ButtonLogin>
        </BoxItem>

        <ButtonNextStep variant="primary" >
          Próximo passo
          <ArrowRight size={20}/>
        </ButtonNextStep>
      </Box>
    </Container>
  )
}