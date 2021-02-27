import React, { useState, useEffect } from 'react';

import Header from '../Header';
import styled from 'styled-components';
const Wrapper = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: calc(100vh - 70px);
`;

export default function Index(props) {
  const { children } = props;
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') setHeight(window?.innerHeight - 70);
  }, []);
  return (
    <div>
      <Header />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
