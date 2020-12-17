import React from 'react';
import { register } from '../../shared/http';

export default function Register({ input, changestate, contactnumber }) {
  const myinput = {
    fname: '',
    lname: '',
    pass: '',
    email: '',
    state: '',
    city: '',
    grade: '',
    board: '',
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    var res = await register(
      myinput.fname.value,
      myinput.lname.value,
      contactnumber,
      myinput.pass.value,
      myinput.email.value,
      myinput.state.value,
      myinput.city.value,
      myinput.grade.value,
      myinput.board.value
    );
    console.log(res, '2');
    if (res.message == 'Successfully registered') {
      localStorage.setItem('token', res.token);
      changestate(true);
    }
  };

  return (
    <form className='register' onSubmit={handlesubmit}>
      <input
        type='text'
        id='login-firstname'
        ref={(input) => (myinput.fname = input)}
        placeholder='First Name'
        required
      />
      <input
        type='text'
        id='login-lastname'
        ref={(input) => (myinput.lname = input)}
        placeholder='Last Name'
        required
      />
      <input
        type='password'
        id='login-password'
        ref={(input) => (myinput.pass = input)}
        placeholder='Password'
        required
      />
      <input
        type='text'
        id='login-emailid'
        ref={(input) => (myinput.email = input)}
        placeholder='Email Id'
        required
      />
      <input
        type='text'
        id='login-state'
        ref={(input) => (myinput.state = input)}
        placeholder='State'
        required
      />
      <input
        type='text'
        id='login-city'
        ref={(input) => (myinput.city = input)}
        placeholder='City'
        required
      />
      <input
        type='text'
        id='login-grade'
        ref={(input) => (myinput.grade = input)}
        placeholder='Grade'
        required
      />
      <input
        type='text'
        id='login-board'
        ref={(input) => (myinput.board = input)}
        placeholder='Board'
        required
      />
      <input
        type='submit'
        id='login-submit'
        placeholder='Register'
        required
        value='Register'
      />
    </form>
  );
}
