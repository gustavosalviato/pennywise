import { BasicButton } from "@/layouts/BasicButton";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 540px;
  margin: 8.0rem auto 0;

  h2{
    color: ${props => props.theme["white"]};;
    font-size: 2.4rem;
  }
  
 > div{
  margin-top: 2.4rem;
 }

 >form > span{
  display: block;
  margin-top: 1.6rem;
  color: ${props => props.theme["gray-400"]};;
  font-size: 1.4rem;
  

  a{
    color: ${props => props.theme["gray-100"]};;
    margin-left: 0.4rem;
    transition: 0.3s;


    &:hover{
      text-decoration: underline;
    }
  }
 }

`

export const Title = styled.p`
  color: ${props => props.theme.white};
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
  `

export const SubHeading = styled.p`
  margin-top: 0.8rem;

  margin-bottom: 2.4rem;
`

export const RegisterButton = styled(BasicButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["blue-700"]};
  width: 100%;
  margin-top: 1.6rem;
  transition: background 0.4s;

 &:hover{
  background-color: ${props => props.theme["blue-600"]};
 }

 &:disabled{
  cursor: not-allowed;
  opacity: 0.6;
 }
`

export const FormErrorMessage = styled.p`
  color: ${props => props.theme["red-300"]};
  font-size: 1.4rem;
  margin: 0.8rem 0
`