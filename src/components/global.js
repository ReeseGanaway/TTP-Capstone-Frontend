import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;  
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    /* flex-direction: row;  */
    justify-content: center;
    /* height: 85vh; */
    margin: 15px;
    padding: 30px;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
transition: all 0.25s linear`;
