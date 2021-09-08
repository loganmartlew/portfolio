import { useState, FC } from 'react';
import Link from 'next/link';
import { useTheme } from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { Theme } from '@styles/theme';

interface Props {}

const MobileNav: FC<Props> = () => {
  const [menuOpen, setOpen] = useState<boolean>(false);
  const theme = useTheme() as Theme;

  const toggleMenu = () => setOpen(prev => !prev);

  return (
    <>
      <div>
        <HamburgerMenu
          isOpen={menuOpen}
          menuClicked={toggleMenu}
          color={theme.colors.white.string()}
          strokeWidth={3}
          borderRadius={2}
        />
      </div>
      <div>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/cv'>CV</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <div>
          <span>
            <Link href='https://github.com/loganmartlew' passHref>
              <a target='_blank'>
                <AiFillGithub />
              </a>
            </Link>
          </span>
          <span>
            <Link href='https://www.linkedin.com/in/logan-martlew/' passHref>
              <a target='_blank'>
                <AiFillLinkedin />
              </a>
            </Link>
          </span>
          <span>
            <Link href='mailto:logan.martlew@gmail.com' passHref>
              <a target='_blank'>
                <MdEmail />
              </a>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
