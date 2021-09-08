import Divider from '@components/Divider';
import { FC } from 'react';
import { SectionContainer, TitleContainer, Title } from './SectionStyles';

interface Props {
  title: string;
  light?: boolean;
}

const Section: FC<Props> = ({ title, light, children }) => {
  return (
    <SectionContainer light={light || false}>
      <TitleContainer>
        <Title>{title}</Title>
        <Divider />
      </TitleContainer>
      {children}
    </SectionContainer>
  );
};

export default Section;
