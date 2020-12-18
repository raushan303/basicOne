import React from 'react';

import Link from 'next/link';
import { baseurl2 } from '../../../src/shared/baseurl';
import { Avatar, Button, Drawer } from 'antd';
import { DrawerWrapper } from './style';

export default function drawer(props) {
  return (
    <Drawer
      placement='left'
      closable={false}
      onClose={() => props.setDrawerVisible(false)}
      visible={props.isDrawerVisible}
    >
      <DrawerWrapper>
        <div className='container'>
          <img
            className='svg-image'
            src={baseurl2 + 'assets/undraw_online2.svg'}
          />
          <div className='text'>Subject</div>
        </div>
        <div className='container'>
          <img
            className='svg-image'
            src={baseurl2 + 'assets/undraw_speech.svg'}
          />
          <div className='text'>Test</div>
        </div>
        <div className='container'>
          <img
            className='svg-image'
            src={baseurl2 + 'assets/undraw_chat.svg'}
          />
          <div className='text'>Chat</div>
        </div>
        <div className='container'>
          <img
            className='svg-image'
            src={baseurl2 + 'assets/undraw_profile.svg'}
          />
          <div className='text'>Profile</div>
        </div>
      </DrawerWrapper>
    </Drawer>
  );
}
