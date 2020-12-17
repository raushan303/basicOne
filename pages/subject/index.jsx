import React from 'react';

import Head from 'next/head';

import Subject from '../../src/components/Subject';
import Layout from '../../src/components/Layout';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Subject />
    </Layout>
  );
}
