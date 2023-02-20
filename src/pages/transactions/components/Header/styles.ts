import { BasicButton } from "@/layouts/BasicButton";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-900"]};
  padding: 6.4rem 0 8.0rem;
`

export const HeaderContext = styled.header`
  display: flex;
  align-items: center;

  max-width: 1120px;
  margin: 0 auto;

  padding: 0 1.6rem;
`

export const ButtonNewTransaction = styled(BasicButton)`
  background-color: ${props => props.theme["blue-700"]};
  transition: all 0.3s;


  &:hover {
    background-color: ${props => props.theme["blue-600"]};
  }
`
export const ButtonNewCategory = styled(BasicButton)`
  transition: all 0.3s;
  border: 2px solid transparent;

  &:hover {
    color: ${props => props.theme["blue-600"]};
    border-color: ${props => props.theme["blue-600"]};;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-left: auto;
`

