import Head from 'next/head';

import Layout from '../../../../src/components/Layout/withHeader';
import Test from '../../../../src/components/Test';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Test />
    </Layout>
  );
}
