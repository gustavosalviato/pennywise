import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  gap: 3.2rem;
  padding: 1.6rem;

  margin-top: -6rem;

`

interface SummaryItemProps {
  ShowTotal?: boolean
}

export const SummaryItem = styled.div<SummaryItemProps>`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme["gray-600"]};
  padding: 2.4rem 1.6rem;
  width: 100%;
  border-radius: 6px;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${props => props.theme["gray-100"]};;
  }

  strong{
    color: ${props => props.theme.white};
    font-size: 3.2rem;
    display: block;
    margin-top: 1.2rem;
  }

  footer {
    margin-top: 1.6rem;
    p {
     
     color: ${props => props.theme["gray-400"]};
   }

   span{
      display:flex;
      align-items: center;
      gap: 0.8rem;

      color: ${props => props.theme.white};
    }

  }


${props => props.ShowTotal && css`
  background-color: ${props => props.theme["blue-700"]};  
  
`};

`