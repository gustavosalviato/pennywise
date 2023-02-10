import { BasicButton } from "@/layouts/BasicButton";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-900"]};
  padding: 6.4rem 0 8.0rem;
`

export const HeaderContext = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;

  padding: 0 1.6rem;
`

export const ButtonNewTransaction = styled(BasicButton)`
  background-color: ${props => props.theme["blue-700"]};
  transition: background 0.2s;


  &:hover {
    background-color: ${props => props.theme["blue-600"]};
  }
`

