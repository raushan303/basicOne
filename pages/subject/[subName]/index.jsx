import Head from 'next/head';

import Layout from '../../../src/components/Layout';
import Chapter from '../../../src/components/Chapter';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Chapter />
    </Layout>
  );
}
