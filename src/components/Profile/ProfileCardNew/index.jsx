import React from 'react';
import { Wrapper } from './style';

import { Progress } from 'antd';

function index() {
  return (
    <Wrapper>
      <div className='upper-container'>
        <div className='avatar-container'>
          <img alt='profile' src='/images/undraw6.svg' />
        </div>
        <div className='author-name'>Raushan Kumar</div>
        <div className='designation'>Project Manager</div>
        <div className='progress-container'>
          <Progress percent={30} steps={4} />
        </div>
      </div>
      <div className='icon-box'>
        <div>
          <div>Q</div>
          <div>110</div>
        </div>
        <div>
          <div>Q</div>
          <div>110</div>
        </div>
        <div>
          <div>Q</div>
          <div>110</div>
        </div>
      </div>
      <div className='about'>
        He is truly devoted person to his work. positive and energetic. Person who inspires the
        entire team with his energy
      </div>
      <div className='social-links'></div>
      <div className='follow'></div>
    </Wrapper>
  );
}

export default index;
