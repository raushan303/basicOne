/* eslint-disable react/prop-types */
import '../styles/globals.css';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import configureStore from '../src/redux/store/store';

const store = configureStore();

// This is a 120 lines comment ########################################################################################

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
