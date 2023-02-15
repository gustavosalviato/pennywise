import { InputText } from '@/components/InputText'
import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, Title, SubmitButton, RadioItem, RadioContainer, ErrorMessage, CloseModal } from './styles'
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FiX } from 'react-icons/fi'
import { UseTransactionContext } from '@/context/TransactionsContext'

const NewTransactionSchema = z.object({
  title: z.string()
    .min(3, { message: 'Título deve conter pelo menos 3 caracteres' })
    .regex(/^[a-zA-Z\u00C0-\u00FF]*$/, {
      message: 'Título deve conter apenas letras',
    }),
  price: z.string()
    .transform((value) => Number(value)),
  transactionType: z.enum(['income', 'outcome']),

  category: z.string()
    .min(3, { message: 'Categoria deve conter pelo menos 3 caracteres' })
    .regex(/^[a-zA-Z\u00C0-\u00FF]*$/, {
      message: 'Título deve conter apenas letras',
    }),

})

type NewTransactionFormData = z.infer<typeof NewTransactionSchema>
export function NewTransactionModal() {
  const { register, formState: { isSubmitting, errors }, handleSubmit, control, reset } = useForm<NewTransactionFormData>({
    resolver: zodResolver(NewTransactionSchema)
  })

  const { addNewTransaction } = UseTransactionContext()

  async function handleNewTransaction(data: NewTransactionFormData) {

    const newTransaction = {
      ...data,
      created_at: new Date()
    }

    addNewTransaction(newTransaction)


    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>

        <CloseModal>
          <FiX />
        </CloseModal>

        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <Title>Nova Transação</Title>

          <label>
            <p>Descrição</p>
            <InputText type="text" {...register('title')} />
          </label>

          {errors.title && (<ErrorMessage>{errors.title.message}</ErrorMessage>)}

          <label>
            <p>Valor</p>
            <InputText type="number"  {...register('price')} />
          </label>

          <label>
            <p>Categoria</p>
            <InputText type="text"  {...register('category')} />
          </label>

          {errors.category && (<ErrorMessage>{errors.category.message}</ErrorMessage>)}


          {/* <SelectCategory /> */}

          <Controller
            control={control}
            name="transactionType"
            render={({ field }) => {
              return (
                <RadioContainer onValueChange={field.onChange} value={field.value}>
                  <RadioItem value='income' variant='income'>
                    <FiArrowUpCircle size={24} />
                    Entrada
                  </RadioItem>

                  <RadioItem value='outcome' variant='outcome'>
                    <FiArrowDownCircle size={24} />
                    Saída
                  </RadioItem>

                </RadioContainer>
              )
            }}
          />
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
          >
            Cadastrar
          </SubmitButton>
        </form>

      </Content>
    </Dialog.Portal>
  )
}