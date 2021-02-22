import React from 'react';

import Head from 'next/head';

import { images } from '../../public/images';
import Layout from '../../src/components/Layout';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div
        style={{
          display: 'flex', flexWrap: 'wrap', overflowY: 'scroll', flex: 1, padding: '50px',
        }}
      >
        {images.map((img) => (
          <div style={{ padding: '30px' }}>
            <p>{img.substring(8)}</p>
            <img style={{ height: '180px', width: '200px' }} src={img} alt="Loading error" />
          </div>
        ))}
      </div>
    </Layout>
  );
}
