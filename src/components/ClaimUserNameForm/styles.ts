import { BasicButton } from '@/layouts/BasicButton';
import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.8rem;

  padding: 1.6rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-800"]};
  border: 1px solid ${(props) => props.theme["gray-600"]};

  @media (max-width:600px){
    grid-template-columns: 1fr;
    }
`;

export const Button = styled(BasicButton)`
  background-color: ${props => props.theme["blue-700"]};
  transition: background 0.6s;

  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover{
    background-color: ${props => props.theme['blue-600']};;
  }


`
export const FormErrorErrorMessage = styled.p`
  color: ${props => props.theme["gray-400"]};
  font-size: 1.4rem;
`