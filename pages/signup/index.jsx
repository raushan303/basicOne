import Head from 'next/head';

import Signup from '../../src/components/Signup';

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Signup />
    </>
  );
}
