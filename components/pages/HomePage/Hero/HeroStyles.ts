import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const HeroContent = styled.div`
  display: grid;
  place-content: center;
  gap: 0.5em;
  flex-grow: 1;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 2.2rem;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export const ArrowWrapper = styled.div`
  height: min-content;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  cursor: pointer;
`;
