import styled from "styled-components";

export const BasicButton = styled.button`
  all: unset;
  border-radius: 6px;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  min-width: 120px;
  box-sizing: border-box;
  padding: 1.2rem 1.6rem;
  color: ${props => props.theme.white};

  cursor: pointer;
`;
