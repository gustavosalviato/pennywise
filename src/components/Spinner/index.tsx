import { SpinnerContainer } from "./styles";
import { CircularProgress } from '@mui/material'

export function Spinner() {
  return (
    <SpinnerContainer>
      <CircularProgress size={50} />
    </SpinnerContainer>
  )
}