import Head from 'next/head';

import QuerySubject from '../../src/components/Querysubject';
import Layout from '../../src/components/Layout';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <QuerySubject />
    </Layout>
  );
}
