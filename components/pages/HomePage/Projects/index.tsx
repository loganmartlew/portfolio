import { FC } from 'react';
import Section from '@components/Section';
import { Project } from '@types';
import ProjectCard from './ProjectCard';
import { ProjectList } from './ProjectsStyles';

interface Props {
  projects: Project[];
}

const Projects: FC<Props> = ({ projects }) => {
  return (
    <Section title={`Projects`}>
      <ProjectList>
        {projects.map((project, i) => (
          <li key={i}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ProjectList>
    </Section>
  );
};

export default Projects;
