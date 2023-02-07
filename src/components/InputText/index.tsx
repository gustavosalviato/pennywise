import { Input, InputContainer, Prefix } from "./styles";
import { forwardRef, InputHTMLAttributes, } from 'react'

export interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
}

// eslint-disable-next-line react/display-name
export const InputText = forwardRef<HTMLInputElement, InputContainerProps>((props, ref) => {
  return (
    <InputContainer>
      {!!props.prefix && <Prefix>{props.prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </InputContainer>
  )
});

