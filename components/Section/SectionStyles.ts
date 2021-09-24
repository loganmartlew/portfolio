import styled from 'styled-components';

interface Props {
  dark: boolean;
}

export const SectionContainer = styled.section<Props>`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1.2em 1em;
  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.black : 'none'};
`;

export const TitleContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h3`
  font-size: 1.5rem;
`;
