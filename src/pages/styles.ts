import { BasicButton } from "@/layouts/BasicButton";
import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: calc(100vw - (100vw - 1160px) / 2);
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8.0rem;
  height: 100vh;
  
`

export const HeroContainer = styled.div`
  max-width: 480px;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  
  > div{
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`

export const ImagePreview = styled.div`
  padding: 3.2rem;
  overflow: hidden;

  @media (max-width: 600px){
    display:none;
  }
`