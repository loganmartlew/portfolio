import Color from 'color';

const colors = {
  white: Color('#FFFFFF'),
  dark: Color('#17181F'),
  black: Color('#0B0C0E'),
  primary: Color('#00C2FF'),
};

export const theme = {
  colors,
};

export type Theme = typeof theme;
