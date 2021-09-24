const colors = {
  white: '#FFFFFF',
  dark: '#17181F',
  black: '#0B0C0E',
  primary: '#00C2FF',
  danger: '#f71b52',
};

const fontWeights = {
  light: 400,
  regular: 600,
  bold: 800,
};

export const theme = {
  colors,
  fontWeights,
};

export type Theme = typeof theme;
