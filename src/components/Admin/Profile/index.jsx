import React from 'react';
import { Wrapper } from './style';

function index() {
  return (
    <Wrapper>
      <div className='avatar-container'>
        <img alt='profile' src='./images/userimg.png' />
      </div>
      <div className='h6 mt-20' style={{ alignSelf: 'flex-start' }}>
        Raushan Kumar
      </div>
      <div className='caption mt-10'>
        Marketing Leader, Author & Founder Women Leaders of Sarjapur Rd | Ex KPMG Achieving business outcomes through strategic marketing I Speaker
      </div>
      <div className='caption mt-10' style={{ alignSelf: 'flex-start' }}>
        20 Videos 40 Question
      </div>
      <div className='caption'> </div>
    </Wrapper>
  );
}

export default index;
