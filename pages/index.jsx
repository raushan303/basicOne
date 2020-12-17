import Head from 'next/head';

import Home from '../src/components/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Home />
    </>
  );
}
