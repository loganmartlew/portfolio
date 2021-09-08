import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.dark.hsl()};
`;

export const TextLogo = styled.h1`
  color: ${({ theme }) => theme.colors.primary.hsl()};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 1.5rem;
`;
