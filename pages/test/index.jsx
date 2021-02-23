import Head from 'next/head';
import TestBanner from '../../src/components/Test/TestBanner';
import Layout from '../../src/components/Layout';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <TestBanner />
    </Layout>
  );
}
