import { FC } from 'react';
import Link from 'next/link';
import { useMedia } from 'react-use';
import MobileNav from './MobileNav';

interface Props {}

const Header: FC<Props> = () => {
  const desktop = useMedia('(min-width: 500px)');

  return (
    <header>
      <h1>
        <Link href='/'>Logan Martlew</Link>
      </h1>
      <nav>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Header;
