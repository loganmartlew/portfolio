import Divider from '@components/Divider';
import { FC } from 'react';
import { SectionContainer, TitleContainer, Title } from './SectionStyles';

interface Props {
  title?: string;
  dark?: boolean;
}

const Section: FC<Props> = ({ title, dark, children }) => {
  return (
    <SectionContainer dark={dark || false}>
      {title && (
        <TitleContainer>
          <Title>{title}</Title>
          <Divider />
        </TitleContainer>
      )}
      {children}
    </SectionContainer>
  );
};

export default Section;
