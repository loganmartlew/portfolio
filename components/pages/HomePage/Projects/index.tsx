import { FC } from 'react';
import Section from '@components/Section';
import { Project } from '@types';

interface Props {
  projects: Project[];
}

const Projects: FC<Props> = ({ projects }) => {
  return <Section title={`Projects`}></Section>;
};

export default Projects;
