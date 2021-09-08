import { FC } from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import {
  HeroSection,
  HeroContent,
  Title,
  Subtitle,
  ArrowWrapper,
} from './HeroStyles';

interface Props {}

const Hero: FC<Props> = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Logan Martlew</Title>
        <Subtitle>Full Stack Web Developer</Subtitle>
      </HeroContent>
      <ArrowWrapper>
        <BsChevronCompactDown />
      </ArrowWrapper>
    </HeroSection>
  );
};

export default Hero;
