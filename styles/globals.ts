import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export default createGlobalStyle<{ theme: Theme }>`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark};
    font-family: 'Urbanist', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeights.regular}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p {
    max-width: 60ch;
  }
`;
