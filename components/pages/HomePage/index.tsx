import { FC } from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import { Project } from '@types';

interface Props {
  projects: Project[];
}

const HomePage: FC<Props> = ({ projects }) => {
  return (
    <>
      <Hero />
      <About />
      <Projects projects={projects} />
    </>
  );
};

export default HomePage;
