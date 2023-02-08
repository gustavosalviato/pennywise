import { InputText } from "../InputText";
import { Button, FormContainer, FormErrorErrorMessage } from "./styles";
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
const ClaimUsernameSchema = z.object({
  username:
    z.string().min(3, { message: 'Usuário deve conter pelo menos 3 letras' })
      .regex(/^([a-z\\-]+)$/i, {
        message: 'Usuário deve conter apenas letras e hifens',
      }),
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameSchema>

export function ClaimUserNameForm() {
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameSchema)
  })

  const router = useRouter()


  async function handleClaimUsernameForm(data: ClaimUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }
  return (
    <>
      <FormContainer onSubmit={handleSubmit(handleClaimUsernameForm)}>
        <InputText
          prefix="wise.me/"
          type="text"
          {...register('username')}
        />

        <Button type="submit" disabled={isSubmitting}>
          Começar
        </Button>
      </FormContainer>
      <FormErrorErrorMessage>{errors.username ? errors.username?.message : 'Informe o usuário desejado'}</FormErrorErrorMessage>
    </>
  )
}