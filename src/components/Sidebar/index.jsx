import React from 'react';
import Link from 'next/link';

import SideBarWrapper from './style';
import { baseurl2 } from '../../../src/shared/baseurl';

function Sidebar() {
  return (
    <SideBarWrapper>
      <div className='main-sidebar'>
        <Link href='/subject' passHref>
          <a className="sidebar-icon-container">
            <img
              className='svg-image'
              src={baseurl2 + 'assets/undraw_online2.svg'}
            />
            <div className='image-text'>Subject</div>
          </a>
        </Link>
        <Link href='/test' passHref>
          <a className="sidebar-icon-container">
            <img
              className='svg-image'
              src={baseurl2 + 'assets/undraw_speech.svg'}
            />
            <div className='image-text'>Mock Test</div>
          </a>
        </Link>
        <Link href='/chat' passHref>
          <a className="sidebar-icon-container">
            <img
              className='svg-image'
              src={baseurl2 + 'assets/undraw_chat.svg'}
            />
            <div className='image-text'>Chat</div>
          </a>
        </Link>
        <Link href='/profile' passHref>
          <a className="sidebar-icon-container">
            <img
              className='svg-image'
              src={baseurl2 + 'assets/undraw_profile.svg'}
            />
            <div className='image-text'>Profile</div>
          </a>
        </Link>
      </div>
    </SideBarWrapper>
  );
}

export default Sidebar;
