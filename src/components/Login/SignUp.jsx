import React from 'react';
import { sendotp } from '../../shared/http';

export default function SignUp({ input, assignnumber }) {
  const myinput = {
    num: '',
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    var res = await sendotp(myinput.num.value);
    console.log(res.message, 'otp');
    if (res.message == 'OTP Sent') {
      assignnumber(myinput.num.value);
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
      <input type='submit' id='login-submit' required value='Next' />
      <div className='login-text'> Already Registered ?</div>
      <div className='nav-link login-nav-link'>Login Here</div>
    </form>
  );
}
