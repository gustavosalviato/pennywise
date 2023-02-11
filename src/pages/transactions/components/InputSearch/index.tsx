import { InputText } from "@/components/InputText";
import { InputSearchContainer, SearchButton } from "./styles";
import { FiSearch } from 'react-icons/fi'

export function InputSearch() {
  return (
    <InputSearchContainer>
      <InputText placeholder="Pesquise por uma transação" />
      <SearchButton>
        <FiSearch size={20} />
        Buscar
      </SearchButton>
    </InputSearchContainer>
  )
}