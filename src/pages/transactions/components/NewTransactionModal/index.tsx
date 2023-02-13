import { InputText } from '@/components/InputText'
import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, Title, SubmitButton, RadioItem, RadioContainer } from './styles'
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi'
import { SelectCategory } from '../SelectCategory'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const NewTransactionSchema = z.object({
  title: z.string().min(3),
  price: z.string()
    .transform((value) => Number(value)),
  transactionType: z.enum(['income', 'outcome'])
})

type NewTransactionFormData = z.infer<typeof NewTransactionSchema>
export function NewTransactionModal() {
  const { register, formState: { isSubmitting, errors }, handleSubmit, control } = useForm<NewTransactionFormData>({
    resolver: zodResolver(NewTransactionSchema)
  })

  async function handleNewTransaction(data: NewTransactionFormData) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>

        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <Title>Nova Transação</Title>

          <label>
            <p>Descrição</p>
            <InputText type="text" {...register('title')} />
          </label>

          <label>
            <p>Valor</p>
            <InputText type="number"  {...register('price')} />
          </label>

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
          <SubmitButton type="submit">Cadastrar</SubmitButton>
        </form>

      </Content>
    </Dialog.Portal>
  )
}