import { FC } from 'react';
import styled from 'styled-components';
import Header from '@components/Header';

const LayoutWrapper = styled.div`
  min-height: 100vh;
`;

const Layout: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
    </LayoutWrapper>
  );
};

export default Layout;
