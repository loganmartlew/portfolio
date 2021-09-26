import { FC } from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';

interface Props {}

const HomePage: FC<Props> = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default HomePage;
