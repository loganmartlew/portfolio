import { FC } from 'react';
import { MdDesktopWindows } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import Button from '@components/Button';
import { Project } from '@types';
import {
  ProjectContainer,
  ProjectTitle,
  ProjectDescription,
  ProjectLinks,
} from './ProjectCardStyles';

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <ProjectContainer>
      <ProjectTitle>{project.name}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectLinks>
        <Button solid>
          <MdDesktopWindows />
          Live
        </Button>
        <Button color='white'>
          <AiFillGithub />
          Github
        </Button>
      </ProjectLinks>
    </ProjectContainer>
  );
};

export default ProjectCard;
