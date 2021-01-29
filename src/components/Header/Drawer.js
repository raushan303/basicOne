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
        <Link href='/subject'>
          <div className='container'>
            <img className='svg-image' src={baseurl2 + 'assets/undraw_online2.svg'} />
            <div className='text'>Subject</div>
          </div>
        </Link>
        <Link href='/test'>
          <div className='container'>
            <img className='svg-image' src={baseurl2 + 'assets/undraw_speech.svg'} />
            <div className='text'>Test</div>
          </div>
        </Link>
        <Link href='/profile'>
          <div className='container'>
            <img className='svg-image' src={baseurl2 + 'assets/undraw_profile.svg'} />
            <div className='text'>Profile</div>
          </div>
        </Link>
        <Link href='/author'>
          <div className='container'>
            <img className='svg-image' src='/images/undraw_dashboard.svg' />
            <div className='text'>Author</div>
          </div>
        </Link>
      </DrawerWrapper>
    </Drawer>
  );
}
