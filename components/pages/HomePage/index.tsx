import { FC } from 'react';
import Hero from './Hero';
import About from './About';

interface Props {}

const HomePage: FC<Props> = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default HomePage;
