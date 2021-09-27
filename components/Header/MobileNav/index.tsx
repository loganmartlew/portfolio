import { useState, useEffect, useRef, FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { gsap } from 'gsap';
import { Theme } from '@styles/theme';
import {
  HamburgerWrapper,
  NavContainer,
  NavLinks,
  NavLink,
  SocialLinks,
  SocialLink,
} from './MobileNavStyles';

interface Props {}

const MobileNav: FC<Props> = () => {
  const [menuOpen, setOpen] = useState<boolean>(false);

  const theme = useTheme() as Theme;
  const { pathname } = useRouter();

  const navRef = useRef<HTMLElement>(null);

  const openMenu = () => {
    setOpen(true);

    setTimeout(() => {
      gsap.to(navRef.current, {
        height: 'calc(100vh - 3.8rem)',
        paddingBottom: '4rem',
        ease: 'power1.inOut',
        duration: 0.15,
      });
    });
  };

  const closeMenu = () => {
    gsap.to(navRef.current, {
      height: 0,
      paddingBottom: 0,
      ease: 'power1.inOut',
      duration: 0.15,
      onComplete: () => setOpen(false),
    });
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    }

    if (!menuOpen) {
      openMenu();
    }
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <>
      <HamburgerWrapper>
        <HamburgerMenu
          isOpen={menuOpen}
          menuClicked={toggleMenu}
          color={theme.colors.white}
          strokeWidth={3}
          borderRadius={2}
          width={25}
          height={18}
        />
      </HamburgerWrapper>
      {menuOpen && (
        <NavContainer ref={navRef}>
          <NavLinks>
            <NavLink>
              <Link href='/'>Home</Link>
            </NavLink>
            <NavLink>
              <Link href='/about'>About</Link>
            </NavLink>
            <NavLink>
              <Link href='/projects'>Projects</Link>
            </NavLink>
            <NavLink>
              <Link href='/cv'>CV</Link>
            </NavLink>
            <NavLink>
              <Link href='/contact'>Contact</Link>
            </NavLink>
          </NavLinks>
          <SocialLinks>
            <SocialLink>
              <Link href='https://github.com/loganmartlew' passHref>
                <a target='_blank'>
                  <AiFillGithub />
                </a>
              </Link>
            </SocialLink>
            <SocialLink>
              <Link href='https://www.linkedin.com/in/logan-martlew/' passHref>
                <a target='_blank'>
                  <AiFillLinkedin />
                </a>
              </Link>
            </SocialLink>
            <SocialLink>
              <Link href='mailto:logan.martlew@gmail.com' passHref>
                <a target='_blank'>
                  <MdEmail />
                </a>
              </Link>
            </SocialLink>
          </SocialLinks>
        </NavContainer>
      )}
    </>
  );
};

export default MobileNav;
