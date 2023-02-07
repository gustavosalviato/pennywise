import { ReactNode, FormHTMLAttributes } from 'react'
import { BoxContainer } from "./styles";

interface BoxProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export function Box({ children, ...props }: BoxProps) {
  return (
    <BoxContainer {...props} >
      {children}
    </BoxContainer>
  );
}
