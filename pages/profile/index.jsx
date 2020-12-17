import Head from 'next/head';

import Profile from '../../src/components/Profile';
import Layout from '../../src/components/Layout';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Profile />
    </Layout>
  );
}
