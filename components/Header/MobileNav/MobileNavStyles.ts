import styled from 'styled-components';

export const HamburgerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const NavContainer = styled.nav`
  position: fixed;
  top: 3.8rem;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 3em;
  width: 100vw;
  height: calc(100vh - 3.8rem);
  padding-bottom: 4rem;
  background-color: ${({ theme }) => theme.colors.dark.hsl()};
  color: ${({ theme }) => theme.colors.white.hsl()};
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
`;

export const NavLink = styled.li`
  font-size: 1.4rem;
  transition: color 150ms;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.hsl()};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
`;

export const SocialLink = styled.span`
  font-size: 1.5rem;
  transition: color 150ms;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.hsl()};
  }
`;
