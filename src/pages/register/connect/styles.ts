import { BasicButton } from "@/layouts/BasicButton";
import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 572px;
  margin: 8.0rem auto 0;

  h2{
    font-size: 2.4rem;
    color: ${props => props.theme.white};
  }

  > div{
    display: flex;
    flex-direction: column;
  }
`

export const SubHeading = styled.p`
  margin-top: 0.8rem;
  margin-bottom: 2.4rem;
`
export const BoxItem = styled.div` 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.4rem;
  border: 1px solid ${props => props.theme["gray-600"]};
  border-radius: 6px;

  p{
    font-weight: 500;
    color: ${props => props.theme["gray-200"]};
  }
`



export const ButtonLogin = styled(BasicButton)` 
  color: ${props => props.theme["blue-500"]};
  border: 1px solid ${props => props.theme["blue-500"]};
  transition: background 0.3s;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover{
    background-color: ${props => props.theme["blue-500"]};
    color: ${props => props.theme.white};
  }

`

interface ButtonNextStepProps {
  variant: "primary" | "tertiary"
}

export const ButtonNextStep = styled(BasicButton)<ButtonNextStepProps>` 
  width: 100%;
  
  margin-top: 1.6rem;
  transition: background 0.6s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: background 0.3s;

  &:disabled{
    cursor: not-allowed;
  }


  ${(props) => props.variant === 'tertiary' && css` 
    background-color: ${props => props.theme["gray-200"]};
  `}

  ${(props) => props.variant === 'primary' && css` 
    background-color: ${props => props.theme["blue-700"]};

    &:hover{
      background-color: ${props => props.theme["blue-600"]};
    }
  `}
`