import React, { useState, useEffect } from 'react';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

import { connect } from 'react-redux';
import { showUser } from '../../../redux/action/user';
import { useRouter } from 'next/router';
import Loader from '../../Loader';

function index(props) {
  const { children } = props;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = cookies.get('token_id');
    if (token) {
      router.push('/subject');
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loader />;
  } else return <>{children}</>;
}

export default index;
