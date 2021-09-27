import styled from 'styled-components';

export const ProjectContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  padding: 1em;
  width: 90%;
  border-radius: 1.2em;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

export const ProjectTitle = styled.h4`
  font-size: 1.2rem;
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1em;
  font-size: 0.9rem;
`;
