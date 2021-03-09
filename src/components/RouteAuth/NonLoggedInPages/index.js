import React, { useState, useEffect } from 'react';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

import { connect } from 'react-redux';
import { showUser } from '../../../redux/action/user';
import { useRouter } from 'next/router';

function index({ showUser, userData, ...props }) {
  const { children } = props;
  const router = useRouter();
  useEffect(() => {
    const token = cookies.get('id_token');
    if (token) {
      showUser();
    }
  }, []);

  useEffect(() => {
    const token = cookies.get('id_token');
    if (token) {
      if (!userData.error) {
        const response = userData?.data?.data;
        if (response) {
          if (response.exist) {
            router.push('/subject');
          } else {
            cookies.remove('id_token', {
              path: '/',
            });
          }
        }
      }
    }
  }, [userData]);
  return <>{children}</>;
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.getUserData,
  };
};

export default connect(mapStateToProps, { showUser })(index);
