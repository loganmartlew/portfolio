import styled from 'styled-components';

export const HamburgerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  z-index: 5;
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
  height: 0;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
`;

interface LinkProps {
  active: boolean;
}

export const NavLink = styled.li<LinkProps>`
  position: relative;
  font-size: 1.4rem;
  transition: color 150ms;

  &::before {
    --size: 0.3em;

    content: '';
    position: absolute;
    width: var(--size);
    height: var(--size);
    top: 50%;
    left: calc(var(--size) * -2);
    transform: translateY(-50%);
    border-radius: var(--size);
    background-color: ${({ theme }) => theme.colors.primary};

    display: ${({ active }) => (active ? 'block' : 'none')};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
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
    color: ${({ theme }) => theme.colors.primary};
  }
`;
