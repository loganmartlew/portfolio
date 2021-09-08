import { FC } from 'react';
import Link from 'next/link';
import { useMedia } from 'react-use';
import { HeaderContainer, TextLogo } from './HeaderStyles';
import MobileNav from './MobileNav';

interface Props {}

const Header: FC<Props> = () => {
  const desktop = useMedia('(min-width: 500px)');

  return (
    <HeaderContainer>
      <TextLogo>
        <Link href='/'>Logan Martlew</Link>
      </TextLogo>
      <MobileNav />
    </HeaderContainer>
  );
};

export default Header;
