import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export default createGlobalStyle<{ theme: Theme }>`
  *, *::before, *::after {
    box-sizing: content-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark.hsl().string()};
    font-family: 'Urbanist', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
