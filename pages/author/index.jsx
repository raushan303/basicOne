import React from 'react';

import Head from 'next/head';

import Admin from '../../src/components/Admin';
import Layout from '../../src/components/Layout';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Admin />
    </Layout>
  );
}
