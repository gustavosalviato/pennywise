import { InputText } from '@/components/InputText'
import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, Title, SubmitButton, RadioItem, RadioContainer, ErrorMessage, CloseModal, Select } from './styles'
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FiX } from 'react-icons/fi'
import { UseTransactionContext } from '@/context/TransactionsContext'
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'

const NewTransactionSchema = z.object({
  title: z.string()
    .min(3, { message: 'Título deve conter pelo menos 3 caracteres' }),
  price: z.string()
    .transform((value) => Number(value)),
  type: z.enum(['income', 'outcome']),
  category_id: z.string(),
})

type NewTransactionFormData = z.infer<typeof NewTransactionSchema>

interface ICategory {
  id: string;
  title: string;
}
export function NewTransactionModal() {
  const { register, formState: { isSubmitting, errors }, handleSubmit, control, reset } = useForm<NewTransactionFormData>({
    resolver: zodResolver(NewTransactionSchema)
  })

  const { addNewTransaction } = UseTransactionContext()

  const session = useSession()
  const username = String(session.data?.user.username)

  async function handleNewTransaction(data: NewTransactionFormData) {
    addNewTransaction(data, username)
    reset()
  }

  const { categories } = UseTransactionContext()

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

            <Select {...register('category_id')}>
              {categories.map((category) => (
                <option
                  value={category.id}
                  key={category.title}>
                  {category.title}
                </option>
              ))}
            </Select>

          </label>

          <Controller
            control={control}
            name="type"
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