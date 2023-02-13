import styled from "styled-components";
import Select from 'react-select'

export const StyledSelect = styled(Select)`
  color: ${props => props.theme["gray-400"]};

  &.css-3w2yfm-ValueContainer{
    background-color: ${props => props.theme["gray-800"]};;
  }

`