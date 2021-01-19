import React from 'react';
import { Wrapper } from './style';

import { Progress } from 'antd';
import Icon from 'react-icons-kit';
import { userPlus } from 'react-icons-kit/fa/userPlus';
import { commenting } from 'react-icons-kit/fa/commenting';
import { ic_feedback } from 'react-icons-kit/md/ic_feedback';
import { facebook } from 'react-icons-kit/icomoon/facebook';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import { linkedin2 } from 'react-icons-kit/icomoon/linkedin2';
import { socialInstagram } from 'react-icons-kit/ionicons/socialInstagram';

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
          <div>
            <Icon icon={commenting} />
          </div>
          <div>110</div>
        </div>
        <div>
          <div>
            <Icon icon={userPlus} />
          </div>
          <div>110</div>
        </div>
        <div>
          <div>
            <Icon icon={ic_feedback} />
          </div>
          <div>110</div>
        </div>
      </div>
      <div className='about'>
        He is truly devoted person to his work. positive and energetic. Person who inspires the
        entire team with his energy
      </div>
      <div className='social-links'>
        <Icon icon={facebook} />
        <Icon icon={twitter} />
        <Icon icon={linkedin2} />
        <Icon icon={socialInstagram} />
      </div>
      <div className='follow-container'>
        <div className='follow'>Follow</div>
      </div>
    </Wrapper>
  );
}

export default index;
