import styled from 'styled-components';

export const BoxContainer = styled.form`
  padding: 2.4rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-800"]};
  border: 1px solid ${(props) => props.theme["gray-600"]};
`;
