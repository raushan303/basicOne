import React, { useState, useEffect } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { baseurl2 } from '../../shared/baseurl';
import Link from 'next/link';

import { HeaderWrapper } from './style';
import Drawer from './Drawer';
import { useRouter } from 'next/router';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

import { connect } from 'react-redux';
import { showUser, updateUserDetails } from '../../redux/action/user';

function index({ showUser, updateUserDetails, userData }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = cookies.get('id_token');
    if (token) {
      showUser();
    } else {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    if (!userData.isLoading && userData.error) {
      router.push('/');
    }
    if (!userData.error) {
      const response = userData?.data?.data;
      if (response) {
        if (response.exist) {
          const userInfo = userData?.data?.data?.user?.userInfo;
          updateUserDetails({ userId: userInfo.id, isLoggedIn: true, phoneNo: userInfo.phoneNo });
        } else {
          cookies.remove('id_token', {
            path: '/',
            domain: 'http://localhost:5000/',
          });
          router.push('/');
        }
      }
    }
  }, [userData]);

  return (
    <HeaderWrapper>
      <Drawer isDrawerVisible={isDrawerVisible} setDrawerVisible={setDrawerVisible} />

      <div className='outer-container'>
        <div
          onClick={() => {
            setDrawerVisible(true);
          }}
          className='main-menu-container'
        >
          <MenuOutlined />
        </div>

        <div className='app-logo'>
          <img src={baseurl2 + 'assets/logo-main3.jfif'} />
        </div>
        <div className='menu-container'>
          <div onClick={handleClick} className='main-menu-title'>
            My Profile
          </div>
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
    </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.getUserData,
  };
};

export default connect(mapStateToProps, { showUser, updateUserDetails })(index);
