import Head from 'next/head';

import Login from '../../src/components/Login';

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Login />
    </>
  );
}
