import Head from 'next/head';

import Layout from '../../../src/components/Layout/withoutSideBar';
import SubjectChapterList from '../../../src/components/Test/TestByChpater';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <SubjectChapterList />
    </Layout>
  );
}
