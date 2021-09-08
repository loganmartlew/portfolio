import { FC } from 'react';
import Section from '@components/Section';
import Button from '@components/Button';

interface Props {}

const About: FC<Props> = () => {
  return (
    <Section title={'About Me'} light>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        laborum, tenetur non ipsam quaerat dolores error itaque maiores mollitia
        totam qui eos hic aut consectetur perspiciatis sed culpa deserunt
        possimus quae unde recusandae inventore eaque distinctio debitis! Rem
        earum beatae quam accusamus quisquam sapiente similique ipsa totam
        blanditiis, itaque veritatis aspernatur rerum animi laborum dolores id
        enim consequatur in. Ducimus.
      </p>
      <Button>See More</Button>
    </Section>
  );
};

export default About;
