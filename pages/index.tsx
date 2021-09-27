import { FC } from 'react';
import HomePage from '@components/pages/HomePage';
import { Project } from '@types';

const PROJECTS: Project[] = [
  {
    name: 'Portfolio',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nunc nunc augue quam. Posuere mus tortor placerat pharetra.',
    imageUrl:
      'https://images.unsplash.com/photo-1545665277-5937489579f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    links: {
      live: 'http://localhost:3000',
      github: 'https://github.com/loganmartlew/portfolio',
    },
  },
  {
    name: 'Shop247',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nunc nunc augue quam. Posuere mus tortor placerat pharetra.',
    imageUrl:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    links: {
      live: 'http://localhost:3000',
      github: 'https://github.com/loganmartlew/portfolio',
    },
  },
  {
    name: 'JonesHarperMedia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nunc nunc augue quam. Posuere mus tortor placerat pharetra.',
    imageUrl:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    links: {
      live: 'http://localhost:3000',
      github: 'https://github.com/loganmartlew/portfolio',
    },
  },
];

interface Props {
  projects: Project[];
}

const Home: FC<Props> = ({ projects }) => {
  projects = projects ?? PROJECTS;

  return <HomePage projects={projects} />;
};

export default Home;
