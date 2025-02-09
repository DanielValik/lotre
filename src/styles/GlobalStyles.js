import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #F5F5F5;
    --text-primary: #333333;
    --text-secondary: #666666;
    --border: #DDDDDD;
    --accent: #888888;
    --hover: #BBBBBB;
    --white: #FFFFFF;
  }

  body {
    background: var(--background);
    color: var(--text-primary);
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--accent);
    text-decoration: none;
  }

  a:hover {
    color: var(--hover);
  }
`;
