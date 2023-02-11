import { BasicButton } from "@/layouts/BasicButton";
import styled from "styled-components";

export const InputSearchContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  >div{
    flex: 1;
  }  
`

export const SearchButton = styled(BasicButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: ${props => props.theme["blue-700"]};
  border: 1px solid ${props => props.theme["blue-700"]};

  transition: background 0.3s;

  &:hover{
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["blue-700"]};;
  }

` 