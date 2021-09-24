import styled from 'styled-components';
import { lighten } from 'polished';
import { Theme } from '@styles/theme';

interface Props {
  block?: boolean;
  color?: 'accent' | 'white' | 'danger';
  solid?: boolean;
}

interface ColorProp {
  border: string;
  background: string;
  hoverBackground: string;
  text: string;
  hoverText: string;
}

const transparent = 'hsla(0, 0%, 0%, 0)';

const getColorProps = (colors: ColorProp) => {
  const { border, background, hoverBackground, text, hoverText } = colors;

  return `
    border-color: ${border};
    background-color: ${background};
    color: ${text};

    &:hover, &:focus {
      border-color: ${hoverBackground};
      background-color: ${hoverBackground};
      color: ${hoverText};
    }
  `;
};

const getColors = (color: Props['color'], theme: Theme): ColorProp => {
  switch (color) {
    case 'white': {
      const border = theme.colors.white;
      const background = transparent;
      const hoverBackground = border;
      const text = border;
      const hoverText = theme.colors.black;
      return { border, background, hoverBackground, text, hoverText };
    }
    case 'danger': {
      const border = theme.colors.danger;
      const background = transparent;
      const hoverBackground = border;
      const text = border;
      const hoverText = theme.colors.white;
      return { border, background, hoverBackground, text, hoverText };
    }
    case 'accent':
    default: {
      const border = theme.colors.primary;
      const background = transparent;
      const hoverBackground = border;
      const text = border;
      const hoverText = theme.colors.white;
      return { border, background, hoverBackground, text, hoverText };
    }
  }
};

const adjustColorsForSolid = (
  solid: Props['solid'],
  colors: ColorProp
): ColorProp => {
  if (!solid) return colors;

  return {
    border: colors.border,
    background: colors.border,
    hoverBackground: lighten(0.2, colors.border),
    text: colors.hoverText,
    hoverText: colors.hoverText,
  };
};

export default styled.button<Props>`
  padding: 0.2em 0.6em;
  border: 3px solid;
  border-radius: 200vh;
  outline: none;
  background: none;
  font-size: 1.1em;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transition: background-color 150ms, color 150ms;
  cursor: pointer;

  ${({ theme, color, solid }) => {
    const initialColors = getColors(color, theme);
    const finalColors = adjustColorsForSolid(solid, initialColors);

    return getColorProps(finalColors);
  }}

  ${({ block }) => (block ? '' : 'width: max-content;')};
`;
