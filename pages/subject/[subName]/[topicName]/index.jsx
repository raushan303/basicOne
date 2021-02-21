import Head from 'next/head';

import Layout from '../../../../src/components/Layout';
import VideoPlayer from '../../../../src/components/VideoPlayer';
import CommunityForm from '../../../../src/components/CommunityForm';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <VideoPlayer />
      <CommunityForm background='#F7F7F7' />
    </Layout>
  );
}
