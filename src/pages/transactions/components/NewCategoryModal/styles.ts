import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import { BasicButton } from "@/layouts/BasicButton";

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.45);
  position: fixed;
`

export const Content = styled(Dialog.Content)`
  min-width: 572px;
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: ${props => props.theme["gray-800"]};;
  border-radius: 6px;
  transform: translate(-50%, -50%);

  form{
    display: flex;
    flex-direction: column;
    padding: 4.8rem;
    gap: 1.6rem;

    label  {
     > p{
        color: ${props => props.theme.white};
        margin-bottom: 0.4rem;
        margin-top: 0.4rem;
      }
    }

  }
`

export const Title = styled(Dialog.Title)`
  font-size: 2.4rem;
  color: ${props => props.theme.white};
`

export const CloseModal = styled(Dialog.Close)`
  all: unset;
  font-size: 0;
  position: absolute;
  cursor: pointer;
  border-radius: 6px;

  transition: filter 0.3s;

  width: 2.4rem;
  height: 2.4rem;
  top: 2.4rem;
  right: 2.4rem;

  svg{
    width: 2.4rem;
    height: 2.4rem;
  }


  &:hover{
    filter: brightness(0.8);
  }
`
export const SubmitButton = styled(BasicButton)`
  background-color: ${props => props.theme["blue-700"]};
  transition: background 0.3s;
  margin-top: 0.8rem;

  &:hover{
    background-color: ${props => props.theme["blue-600"]};
  }
`

export const ErrorMessage = styled.p`
  color: ${props => props.theme["red-300"]} !important;
  font-size: 1.4rem;
`