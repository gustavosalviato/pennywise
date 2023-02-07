import styled from 'styled-components';

export const InputContainer = styled.div`
 padding: 1.2rem 1.6rem;
 background-color: ${(props) => props.theme['gray-900']};
 border: 2px solid ${(props) => props.theme['gray-900']};
 align-items: baseline;
 border-radius: 6px;
 display: flex;

 &:has(input:focus){
  border-color: ${(props) => props.theme['blue-700']};
 }

 &:has(input:disabled){
  cursor: not-allowed;
  opacity: 0.6;
 }
`;

export const Prefix = styled.p`
 font-size: 1.6rem;
 color: ${(props) => props.theme['gray-400']};
 font-weight: 400;
`

export const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: 0;
  color: ${props => props.theme.white};

  &::placeholder{
    color: ${props => props.theme['gray-400']};;
  }

  &:focus{
    outline: 0;
  }
`