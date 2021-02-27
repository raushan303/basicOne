import Head from 'next/head';

import Layout from '../../../src/components/Layout/withoutSideBar';
import SubjectList from '../../../src/components/Test/TestBySubject';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <SubjectList />
    </Layout>
  );
}
