/* eslint-disable react/prop-types */
import '../styles/globals.css';
import 'antd/dist/antd.css';

import { useState } from 'react';

import { Provider } from 'react-redux';
import Router from 'next/router';

import { Spin } from 'antd';
import configureStore from '../src/redux/store/store';

const store = configureStore();

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.onRouteChangeStart = () => {
    setLoading(true);
  };

  Router.onRouteChangeComplete = () => {
    setLoading(false);
  };
  return (
    <Spin spinning={loading} tip="Sit tight,while we are curating content for you...">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Spin>
  );
}

export default MyApp;
