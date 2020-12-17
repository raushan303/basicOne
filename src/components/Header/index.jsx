import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { baseurl2 } from '../../shared/baseurl';
import Link from 'next/link';

import HeaderWrapper from './style';

function Navbar(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <HeaderWrapper>
      <div className='main-navbar-container'>
        <div className='main-navbar-inner-container'>
          <div className='main-menu-container'>
            <MenuOutlined />
          </div>

          <div className='main-navbar-content'>
            <div className='main-app-logo'>
              <img src={baseurl2 + 'assets/logo-main3.jfif'} />
            </div>
            <div className='main-sep'>|</div>
            <div className='main-page-name'>{props.title}</div>
          </div>

          <div className='main-menu-buttons'>
            <div>
              <a className='main-menu-title' href='#' onClick={handleClick}>
                My Profile
              </a>
            </div>

            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              aria-controls='customized-menu'
              aria-haspopup='true'
              getContentAnchorEl={null}
              open={Boolean(anchorEl)}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                <Link href='/profile'>My Profile</Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Navbar;
