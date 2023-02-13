import styled from "styled-components";

export const StyledTransactions = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  background-color: ${props => props.theme["gray-800"]};
`


export const TransactionsContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.6rem;
`