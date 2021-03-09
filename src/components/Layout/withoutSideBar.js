import React from 'react';

import Header from '../Header';
import styled from 'styled-components';
import RouteAuth from '../RouteAuth/PrivateRoute';
const Wrapper = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: calc(100vh - 70px);
`;

export default function Index(props) {
  const { children } = props;
  return (
    <RouteAuth>
      <Header />
      <Wrapper>{children}</Wrapper>
    </RouteAuth>
  );
}
