import Head from 'next/head';

import TestSubject from '../../src/components/TestSubject';
import Layout from '../../src/components/Layout';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <TestSubject />
    </Layout>
  );
}
