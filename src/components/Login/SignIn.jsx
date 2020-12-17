import React from 'react';
import { login } from '../../shared/http';
import { useRouter } from 'next/router';

export default function SignIn({ setPath }) {
  const router = useRouter();
  const myinput = {
    num: '',
    pass: '',
  };

  const handlesubmit = async (event) => {
    event.preventDefault();

    var res = await login(myinput.num.value, myinput.pass.value);
    console.log(res, ' res ');
    if (res.err) {
      console.log(res.err);
    }
    if (res.token) {
      router.push('/subject', '/subject');
    }
  };

  return (
    <form onSubmit={handlesubmit}>
      <input
        type='text'
        id='login-contactnumber'
        ref={(input) => (myinput.num = input)}
        placeholder='Mobile Number'
        required
      />
      <input
        type='password'
        id='login-password'
        ref={(input) => (myinput.pass = input)}
        placeholder='Enter Password'
        required
      />
      <input
        type='submit'
        id='login-submit'
        placeholder='Login'
        value='Login'
        required
      />
      <div className='login-text'> Not Connected Yet ?</div>
      <div
        className='nav-link login-nav-link'
        onClick={() => {
          setPath('signUp');
        }}
      >
        Create Account Now !
      </div>
    </form>
  );
}
