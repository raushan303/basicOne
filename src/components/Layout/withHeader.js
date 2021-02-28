import React from 'react';

import Header from '../Header';
import styled from 'styled-components';
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
`;

export default function Index(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
