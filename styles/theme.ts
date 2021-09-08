import Color from 'color';

const colors = {
  white: Color('#FFFFFF'),
  dark: Color('#17181F'),
  black: Color('#0B0C0E'),
  primary: Color('#00C2FF'),
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
