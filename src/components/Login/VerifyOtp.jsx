import React from 'react';
import { verifyotp } from '../../shared/http';

export default function Votp({ input, contactnumber, assignnumber }) {
  const myinput = {
    otp: '',
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    var res = await verifyotp(myinput.otp.value, contactnumber);
    if (res.message == 'OTP Verified') {
    } else {
      assignnumber(null);
    }
  };

  return (
    <div>
      <div>Enter "superUser" if OTP not recieved</div>
      <form onSubmit={handlesubmit}>
        <input
          type='text'
          id='login-contactnumber'
          ref={(input) => (myinput.otp = input)}
          placeholder='OTP'
          required
        />
        <input
          type='submit'
          id='login-submit'
          placeholder='Verify Otp'
          required
          value='Next'
        />
      </form>
    </div>
  );
}
