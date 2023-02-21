import { Box } from "@/components/Box";
import { InputText } from "@/components/InputText";
import { Container, Title, SubHeading, RegisterButton, FormErrorMessage } from "./styles";
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useEffect } from "react";
import { api } from '../../lib/axios'

const RegisterFormSchema = z.object({
  name: z.string().min(3, { message: 'Usuário deve conter pelo menos 3 letras' }),
  username:
    z.string().min(3, { message: 'Usuário deve conter pelo menos 3 letras' })
      .regex(/^([a-z\\-]+)$/i, {
        message: 'Nome deve conter apenas letras e hifens',
      }),
})


type RegisterFormData = z.infer<typeof RegisterFormSchema>

export default function Register() {

  const router = useRouter()

  const { handleSubmit, register, formState: { errors, isSubmitting }, setValue } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormSchema)
  })

  async function handleRegisterForm(data: RegisterFormData) {
    const { name, username } = data

    try {
      const reponse = await api.post('/register', {
        username,
        name,
      })

      console.log(reponse.data)

      await router.push('/register/connect')
      
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    setValue('username', String(router.query.username))
  }, [setValue, router.query.username])

  return (
    <Container>
      <h2>Bem-vindo ao PennyWise</h2>
      <SubHeading>Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.</SubHeading>

      <Box onSubmit={handleSubmit(handleRegisterForm)}>
        <label>
          <Title>Nome do usuário</Title>
          <InputText
            prefix="pennywise.me/"
            {...register("username")}
          />
          {errors.username && <FormErrorMessage>{errors.username.message}</FormErrorMessage>}
        </label>

        <label>
          <Title>Nome completo</Title>
          <InputText
            {...register("name")}
          />
          {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}

        </label>

        <RegisterButton type="submit">Proximo passo</RegisterButton>
      </Box>
    </Container>
  )
} 
