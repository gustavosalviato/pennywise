import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

html{
  font-size: 62.5%;
}

body{
  -webkit-font-smoothing: antialiased;
  background-color: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme['gray-200']};
  line-height: 160%;
}


body,button,textarea,input{
    font-weight: 400;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
}

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button:focus{
    outline: transparent;
    box-shadow: 0 0 0 2px ${props => props.theme['blue-500']};;
  }

  
`