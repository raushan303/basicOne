import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';

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
        {children}
      </div>
    </div>
  );
}
