import Head from 'next/head';

import Layout from '../../../src/components/Layout';
import TestForm from '../../../src/components/TestForm';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <TestForm />
    </Layout>
  );
}
