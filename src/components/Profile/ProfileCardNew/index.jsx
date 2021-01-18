import React from 'react';
import { Wrapper } from './style';

import { Progress } from 'antd';

function index() {
  return (
    <Wrapper>
      <div className='avatar-container'>
        <img alt='profile' src='/images/undraw6.svg' />
      </div>
      <div className='author-name'>Raushan Kumar</div>
      <div className='designation'>Project Manager</div>
      <div className='progress-container'>
        <Progress percent={30} steps={4} />
      </div>
      <div className='icon-box'></div>
      <div className='about'></div>
      <div className='social-links'></div>
      <div className='follow'></div>
    </Wrapper>
  );
}

export default index;
