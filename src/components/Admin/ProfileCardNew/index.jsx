import React from 'react';
import { Wrapper } from './style';

function index() {
  return (
    <Wrapper>
      <div className='avatar-container'>
        <img alt='profile' src='/images/undraw6.svg' />
      </div>
      <div className='content-container'>
        <div className='bold-16 author-name' style={{ alignSelf: 'flex-start' }}>
          Raushan Kumar
        </div>
        <div className='normal-14 font-5 mt-10'>
          Marketing Leader, Author & Founder Women Leaders of Sarjapur Rd | Ex KPMG Achieving
          business outcomes through strategic marketing I Speaker
        </div>
        <div className='normal-14 font-5 mt-10' style={{ alignSelf: 'flex-start' }}>
          20 Videos 40 Question
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
