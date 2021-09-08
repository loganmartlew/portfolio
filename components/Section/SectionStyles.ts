import styled from 'styled-components';

interface Props {
  light: boolean;
}

export const SectionContainer = styled.section<Props>`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1.2em 1em;
  background-color: ${({ theme, light }) =>
    light ? theme.colors.white.hsl() : 'none'};
`;

export const TitleContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary.hsl()};
`;

export const Title = styled.h3`
  font-size: 1.5rem;
`;
