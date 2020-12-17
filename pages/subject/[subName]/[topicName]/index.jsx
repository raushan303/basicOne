import Head from 'next/head';

import Layout from '../../../../src/components/Layout';
import VideoPlayer from '../../../../src/components/VideoPlayer';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <VideoPlayer />
    </Layout>
  );
}
