import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import EditModal from '../EditModal';
import { storage } from '../../../lib/firebase';
import axios from 'axios';
import { VIMEO_AUTH_TOKEN } from '../../../shared/SAMPLE_ENV';

function index() {
  const [visible, setVisible] = useState(false);

  const handleUpload = (image) => {
    if (!image) return;
    // setUploading(true);
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log('Error while uploading image!');
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log('url', url);
            // setUserImageUrl(url);
            // setUploading(false);
          });
      }
    );
  };

  const getImageUrl = async () => {
    try {
      const response = await axios.post(`https://api.vimeo.com/me/videos`, undefined, {
        headers: {
          authorization: VIMEO_AUTH_TOKEN,
        },
      });
      return response;
    } catch (e) {
      console.log('error', e);
    }
  };
  const [formContent, setFormContent] = useState('');

  // useEffect(()=>{
  //   videoUpload();
  // },[])
  const videoUpload = async (v) => {
    const imgUrl = await getImageUrl();
    console.log(v, imgUrl?.data?.link);
    setFormContent(imgUrl?.data?.upload?.form);
  };

  return (
    <Wrapper>
      <input
        type='file'
        onChange={(image) => {
          handleUpload(image.target.files[0]);
        }}
      />
      <div
        className='mt-20'
        dangerouslySetInnerHTML={{
          __html: formContent,
        }}
      ></div>
      {/* <input type='file' onChange={(e)=>{videoUpload(e)}}/> */}
      <button
        onClick={() => {
          videoUpload();
        }}
      >
        Upload File
      </button>
      <EditModal visible={visible} setVisible={setVisible} />
      <div onClick={() => setVisible(true)} className='avatar-container'>
        <img alt='profile' src='/images/undraw6.svg' />
      </div>
      <div className='content-container'>
        <div className='bold-16 author-name' style={{ alignSelf: 'flex-start' }}>
          Raushan Kumar
        </div>
        <div className='normal-14 font-5 mt-10'>
          Marketing Leader, Author & Founder Women Leaders of Sarjapur Rd | Ex KPMG Achieving
          business outcomes through strategic marketing I Speaker
        </div>
        <div className='normal-14 font-5 mt-10' style={{ alignSelf: 'flex-start' }}>
          20 Videos 40 Question
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
