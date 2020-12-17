import React from 'react';
import { login } from '../../shared/http';

export default function SignIn({
  input,
  changestate,
  changeHome,
  changeLoading,
}) {

  const myinput = {
    num: '',
    pass: '',
  };

  const handlesubmit = async (event) => {
    changeLoading(true);
    event.preventDefault();

    var res = await login(myinput.num.value, myinput.pass.value);
    console.log(res, ' res ');
    if (res.err) {
      console.log(res.err);
    }
    if (res.token) {
      localStorage.token = res.token;
      changestate(true);
    }
    changeLoading(false);
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
      <NavLink className='nav-link login-nav-link' to='/signup'>
        Create Account Now !
      </NavLink>
      {/* <NavLink onClick={()=>{changeHome(true);}} className="nav-link login-nav-link" to='#'>Return back to home !</NavLink> */}
    </form>
  );
}
