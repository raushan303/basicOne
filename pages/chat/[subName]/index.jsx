import Head from 'next/head';

import Layout from '../../../src/components/Layout';
import Chat from '../../../src/components/client';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Chat />
    </Layout>
  );
}
