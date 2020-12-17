import React, { useState } from 'react';

import Wrapper from './style';

import SignIn from './SignIn';
import Register from './Register';
import VerifyOtp from './VerifyOtp';
import SignUp from './SignUp';

function Login() {
  const [contactNumber, setContactNumber] = useState(null);
  const [path, setPath] = useState('signIn');

  const component = (
    <>
      {path === 'signIn' && <SignIn setPath={setPath} />}
      {path === 'signUp' && (
        <SignUp setPath={setPath} setContactNumber={setContactNumber} />
      )}
      {path === 'verifyOtp' && (
        <VerifyOtp contactNumber={contactNumber} setPath={setPath} />
      )}
      {path === 'register' && <Register contactNumber={contactNumber} />}
    </>
  );

  return (
    <Wrapper>
      <div className='login-container clearfix'>
        <div className='login-first-col'>
          <img src='./images/undraw_press_play.svg' alt='student' />
        </div>
        <div className='login-second-col'>
          <h1>
            <span>Quick</span> Study
          </h1>
          {component}
        </div>
      </div>
    </Wrapper>
  );
}
export default Login;
