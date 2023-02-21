import { InputText } from "@/components/InputText";
import { InputSearchContainer, SearchButton } from "./styles";
import { FiSearch } from 'react-icons/fi'
import { FormEvent, useState } from "react";
import { UseTransactionContext } from "@/context/TransactionsContext";

interface InputSearchProps {
  username: string | undefined;
}

export function InputSearch({ username }: InputSearchProps) {
  const [search, setSearch] = useState('');

  const { getTransactions } = UseTransactionContext()

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault()

    getTransactions(username!, search)
  }

  return (
    <InputSearchContainer onSubmit={handleSubmitForm}>
      <InputText
        placeholder="Buscar conteúdo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <SearchButton>
        <FiSearch size={20} />
        Buscar
      </SearchButton>
    </InputSearchContainer>
  )
}