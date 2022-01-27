import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
  display:flex;
  justify-content: space-around;
  align-item:center;
  text-align:center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}; 
    margin: 15px;
    padding: 15px; 
    font-weight: bolder;
    font-size: 1.2rem;
    text-decoration: none;
  }
  
background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
transition: all 0.25s linear`;
