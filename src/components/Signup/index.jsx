import React, { useState } from 'react';

import Register from './Register';
import VerifyOtp from './VerifyOtp';
import SignUp from './SignUp';

import RouteAuth from '../RouteAuth/PublicRoute';

function index() {
  const [path, setPath] = useState('signUp');

  const component = (
    <>
      {path === 'signUp' && <SignUp setPath={setPath} />}
      {path === 'verifyOtp' && <VerifyOtp setPath={setPath} />}
      {path === 'register' && <Register />}
    </>
  );

  return <RouteAuth>{component}</RouteAuth>;
}
export default index;
