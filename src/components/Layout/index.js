import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import styled from 'styled-components';
const Wrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  flex: 1;
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
      <div style={{ display: 'flex', height: height }}>
        <Sidebar />
        <Wrapper>{children}</Wrapper>
      </div>
    </div>
  );
}
