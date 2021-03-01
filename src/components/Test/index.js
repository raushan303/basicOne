import React, { useState } from 'react';
import Testsatrt from './TestStart';
import TestForm from './TestForm';
function index() {
  const [start, setStart] = useState(false);
  if (start) return <TestForm />;
  else return <Testsatrt setStart={setStart} />;
}

export default index;
