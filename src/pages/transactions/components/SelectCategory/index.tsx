import Select from 'react-select'
import { StyledSelect } from './styles';
const options = [
  { value: "blues", label: "Blues" },
  { value: "rock", label: "Rock" },
  { value: "jazz", label: "Jazz" },
  { value: "orchestra", label: "Orchestra" },
];

export function SelectCategory() {
  return (
    <StyledSelect options={options} />
  )
}