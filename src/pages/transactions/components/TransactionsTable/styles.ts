import styled from "styled-components";

export const TransactionsTableContainer = styled.table`
  width: 100%;
  margin-top: 2.4rem;
  border-spacing: 0 0.8rem;
  border-collapse: separate;

  th{
    background-color: ${props => props.theme["gray-700"]};
    padding: 1.6rem 3.2rem;
    text-align: left;
    font-weight: 400;

    &:first-child{
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
    }

    &:last-child{
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
    }
  }

  td{
    background-color: ${props => props.theme["gray-700"]};
    padding: 1.6rem 3.2rem;
    text-align: left;

    &:first-child{
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
    }

    &:last-child{
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
    }
    
  }
  
`
interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${props => props.variant === 'income' ? props.theme["blue-700"] : props.theme["red-300"]};
`