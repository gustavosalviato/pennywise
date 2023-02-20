import { InputText } from '@/components/InputText'
import * as Dialog from '@radix-ui/react-dialog'
import { FiX } from 'react-icons/fi'
import { CloseModal, Content, Overlay, SubmitButton, Title, ErrorMessage } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UseTransactionContext } from '@/context/TransactionsContext'
const newCategorySchema = z.object({
  title: z.string()
    .min(3, { message: 'Título deve conter pelo menos 3 caracteres' })
    .regex(/^[a-zA-Z\u00C0-\u00FF]*$/, {
      message: 'Título deve conter apenas letras',
    }),
})

type newCategoryFormData = z.infer<typeof newCategorySchema>

export function NewCategoryModal() {

  const { handleSubmit, formState: { errors, isSubmitting }, register, reset, } = useForm<newCategoryFormData>({
    resolver: zodResolver(newCategorySchema)
  })


  const { addNewCategory } = UseTransactionContext()


  async function handleNewCategory(data: newCategoryFormData) {
    addNewCategory(data)

    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>

        <CloseModal>
          <FiX />
        </CloseModal>

        <form
          onSubmit={handleSubmit(handleNewCategory)}
        >
          <Title>Nova Transação</Title>

          <label>
            <p>Descrição</p>
            <InputText type="text" {...register('title')} />
          </label>

          {errors.title && (<ErrorMessage>{errors.title.message}</ErrorMessage>)}

          <SubmitButton
            type='submit'
            disabled={isSubmitting}
          >
            Cadastrar
          </SubmitButton>
        </form>

      </Content>
    </Dialog.Portal>
  )
}